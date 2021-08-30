/* eslint-disable import/no-cycle */
import axios, { AxiosError, AxiosInstance } from 'axios'
import { GetServerSidePropsContext } from 'next'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

import { signOut } from '@hooks/auth'

import AuthTokenError from './errors/AuthTokenError'

let isRefreshing = false
let failedRequestQueue: {
  onSuccess: (token_success: string) => void
  onFailure: (err: AxiosError<unknown>) => void
}[] = []

export const getApiClient = (
  ctx?: GetServerSidePropsContext
): AxiosInstance => {
  let cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_USERS || 'http://localhost:3333/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies['fisioauth.token']}`
    }
  })

  api.interceptors.response.use(
    response => {
      return response
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        const { message } = error.response?.data

        if (message && message === 'Invalid JWT token') {
          cookies = parseCookies(ctx)
          const { 'userauth.refresh_token': refresh_token } = cookies

          const originalConfig = error.config

          if (!isRefreshing) {
            isRefreshing = true
            api
              .post('/sessions/refresh-token', {
                token: refresh_token
              })
              .then(res => {
                const {
                  token: updated_token,
                  refresh_token: updated_refresh_token
                } = res.data

                setCookie(ctx, 'userauth.token', updated_token, {
                  maxAge: 60 * 15,
                  path: '/'
                })
                setCookie(
                  ctx,
                  'userauth.refresh_token',
                  updated_refresh_token,
                  {
                    maxAge: 60 * 60 * 24 * 30,
                    path: '/'
                  }
                )

                api.defaults.headers.Authorization = `Bearer ${updated_token}`

                failedRequestQueue.forEach(request =>
                  request.onSuccess(updated_token)
                )
                failedRequestQueue = []
              })
              .catch(err => {
                failedRequestQueue.forEach(request => request.onFailure(err))
                failedRequestQueue = []

                // logout user
                if (process.browser) {
                  signOut()
                } else {
                  destroyCookie(ctx, 'fisioauth.token')
                  destroyCookie(ctx, 'fisioauth.refresh_token')
                }
              })
              .finally(() => {
                isRefreshing = false
              })
          }

          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              onSuccess: (token_success: string) => {
                originalConfig.headers.Authorization = `Bearer ${token_success}`

                resolve(api(originalConfig))
              },
              onFailure: (err: AxiosError) => {
                reject(err)
              }
            })
          })
        }

        if (process.browser) {
          signOut()
        } else {
          return Promise.reject(new AuthTokenError())
        }
      }

      return Promise.reject(error)
    }
  )

  return api
}

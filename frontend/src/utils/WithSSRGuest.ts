/* eslint-disable no-empty */
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'
import { parseCookies } from 'nookies'

import { getApiClient } from '@services/axios'

export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const newPath = ctx.params?.redirect as string
    const cookies = parseCookies(ctx)
    const token = cookies['userauth.token']
    const refresh_token = cookies['userauth.refresh_token']

    if (token || refresh_token) {
      try {
        const apiClient = getApiClient(ctx)
        await apiClient.get('/accounts/me')

        return {
          redirect: {
            destination: newPath || `/profile`,
            permanent: false
          }
        }
      } catch (err) {}
    }

    return fn(ctx)
  }
}

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'
import { destroyCookie, parseCookies } from 'nookies'

import AuthTokenError from '@services/errors/AuthTokenError'

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)
    const token = cookies['userauth.token']

    if (!token) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false
        }
      }
    }

    try {
      return await fn(ctx)
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, 'userauth.token')
        destroyCookie(ctx, 'userauth.refresh_token')
        return {
          redirect: {
            destination: '/signin',
            permanent: false
          }
        }
      }
    }

    return fn(ctx)
  }
}

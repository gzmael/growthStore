/* eslint-disable import/no-cycle */
import { createContext, ReactNode, useEffect, useState } from 'react'

import { AxiosError, AxiosResponse } from 'axios'
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

import {
  FilterFields,
  ProdFavList,
  SpecificationsList
} from '@models/SearchDTOs'
import { Favorite, User } from '@models/User'
import { getApiClient } from '@services/axios'
import { filterFavorites } from '@utils/FilterFavorites'
import { getIDsProducts } from '@utils/GetIDsProducts'

const apiUser = getApiClient()

type SingInCredentials = {
  email: string
  password: string
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextData = {
  signIn: (credentials: SingInCredentials) => Promise<void>
  signOut: () => void
  destroyUser: () => void
  updateUser: (data: User) => Promise<void>
  isAuthenticated: boolean
  user: User
  filter: FilterFields
  setFilter: (filter: FilterFields) => void
  favoriteList: ProdFavList[]
  specificationsFav: SpecificationsList[]
  totalFiltered: number
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(): void {
  destroyCookie(undefined, 'userauth.token')
  destroyCookie(undefined, 'userauth.refresh_token')

  window.localStorage.removeItem('favorites')
  window.localStorage.removeItem('specificationsFav')
  window.localStorage.removeItem('favsFiltered')
  window.localStorage.removeItem('filterFav')

  Router.push('/signin')
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user
  const [favoriteList, setFavoriteList] = useState<ProdFavList[]>([])
  const [specificationsFav, setSpecificationsFav] = useState<
    SpecificationsList[]
  >([])
  const [filter, setFilter] = useState<FilterFields>(() => {
    if (process.browser) {
      const filterCached = window.localStorage.getItem('filterFav')
      if (filterCached) {
        return JSON.parse(filterCached)
      }
    }

    return {
      page: 1,
      limit: 12
    }
  })
  const [totalFiltered, setTotalFiltered] = useState(0)

  useEffect(() => {
    const { 'userauth.token': token } = parseCookies()

    if (token) {
      apiUser
        .get('/accounts/me')
        .then(async (res: AxiosResponse) => {
          const newUser = res.data as User
          setUser(newUser)
        })
        .catch(() => {
          setUser(null)
          signOut()
        })
    }
  }, [])

  useEffect(() => {
    async function updateFavorites(favorites: Favorite[]) {
      const { list, products } = await getIDsProducts(favorites)
      setSpecificationsFav(list)

      const { limit, order, orderType, page, query, specifications } = filter
      const { list: listFavs, total: totalList } = filterFavorites({
        favorites: products,
        specifications,
        limit,
        order,
        orderType,
        page,
        query
      })
      setFavoriteList(listFavs)
      setTotalFiltered(totalList)

      window.localStorage.setItem('favorites', JSON.stringify(products))
      window.localStorage.setItem('specificationsFav', JSON.stringify(list))
      window.localStorage.setItem('favsFiltered', JSON.stringify(listFavs))
      window.localStorage.setItem('filterFav', JSON.stringify(filter))
    }
    if (user && user.favorites) {
      updateFavorites(user.favorites)
    }
  }, [filter, user])

  async function signIn({ email, password }: SingInCredentials) {
    await apiUser
      .post('/sessions', {
        email,
        password
      })
      .then(async (res: AxiosResponse) => {
        const { token, refresh_token } = res.data

        setCookie(undefined, 'userauth.token', token, {
          maxAge: 60 * 15,
          path: '/'
        })

        setCookie(undefined, 'userauth.refresh_token', refresh_token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/'
        })

        apiUser.defaults.headers.Authorization = `Bearer ${token}`

        // Get Account
        const response = await apiUser.get('/accounts/me')
        const newUser = response.data as User

        setUser(newUser)
        Router.push('/profile')
      })
      .catch((err: AxiosError) => {
        throw new Error(err.message)
      })
  }

  async function updateUser(data: User) {
    setUser(data)
  }

  async function destroyUser() {
    setUser(null)
    signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        destroyUser,
        updateUser,
        isAuthenticated,
        user,
        favoriteList,
        filter,
        setFilter,
        specificationsFav,
        totalFiltered
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

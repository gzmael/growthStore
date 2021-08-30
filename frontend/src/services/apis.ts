import axios from 'axios'

import { getApiClient } from './axios'

type SourcesTypes = 'pets' | 'candys'

export const apiSource = (source: SourcesTypes) => {
  if (source === 'candys') {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_CANDY || 'http://localhost:3335',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_PETS || 'http://localhost:3334',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const api = getApiClient()

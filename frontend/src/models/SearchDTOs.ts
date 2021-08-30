import { Candy, Pet, Product } from './Product'
import { Specification } from './Specifications'
import { Favorite } from './User'

type ProductType = Candy | Pet

type ResponseSourceData = {
  data: ProductType[]
  total: number
  totalFiltered: number
}

interface ProdFavs {
  product: ProductType
  isFav: boolean
  favId?: string
}

interface SpecificationsList {
  name: string
  items: Specification[]
}

interface FilterFields {
  limit?: number
  page?: number
  order?: string
  orderType?: string
  query?: string
  specifications?: string[]
  type?: 'candys' | 'pets'
}

interface ProdFavList {
  favorite: Favorite
  product?: Product
  specifications?: Specification[]
}

export type {
  FilterFields,
  ProdFavs,
  ProductType,
  ResponseSourceData,
  SpecificationsList,
  ProdFavList
}

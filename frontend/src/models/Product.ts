import { Specification } from './Specifications'

type Candy = {
  public_id: string
  name: string
  price: number
  brand: string
  description: string
  rating: number
  photo?: string
  created_at: Date
  specifications: Specification[]
}

type Pet = {
  public_id: string
  name: string
  breed: string
  gener: string
  vaccinated: boolean
  photo?: string
  price: number
  created_at: Date
  specifications: Specification[]
}

type ProductType = Candy | Pet
type Product = {
  type: 'candys' | 'pets'
  data: ProductType
}

export type { Product, Pet, Candy }

import { Candy, Pet } from '@models/Product'
import { ProdFavList } from '@models/SearchDTOs'

interface ResponseFavorites {
  total: number
  list: ProdFavList[]
}

interface FilterProps {
  favorites: ProdFavList[]
  page?: number
  limit?: number
  order?: string
  orderType?: string
  query?: string
  specifications: string[] | string | undefined
}
const filterFavorites = ({
  favorites,
  limit = 12,
  page = 1,
  order,
  orderType,
  query,
  specifications
}: FilterProps): ResponseFavorites => {
  let filtered = favorites

  if (query) {
    filtered = filtered.filter(favorite => {
      if (favorite.product.data.name.includes(query)) {
        return favorite
      }
      if (favorite.product.type === 'pets') {
        const pet = favorite.product.data as Pet

        if (pet.breed.includes(query)) {
          return favorite
        }

        if (pet.gener === query) {
          return favorite
        }
      }

      if (favorite.product.type === 'candys') {
        const candy = favorite.product.data as Candy

        if (candy.brand.includes(query)) {
          return favorite
        }
      }
      return null
    })
  }

  if (specifications.length > 0) {
    filtered = filtered.filter(({ specifications: specFav }) =>
      specFav.some(s => specifications.includes(s.description))
    )
  }

  if (order) {
    filtered = filtered.sort((a, b) => {
      if (order === 'name') {
        if (a.product.data.name > b.product.data.name) {
          return orderType === 'ASC' ? 1 : -1
        }
        if (a.product.data.name < b.product.data.name) {
          return orderType === 'ASC' ? -1 : 1
        }
        return 0
      }

      if (order === 'price') {
        if (a.product.data.price > b.product.data.price) {
          return orderType === 'ASC' ? 1 : -1
        }
        if (a.product.data.price < b.product.data.price) {
          return orderType === 'ASC' ? -1 : 1
        }
        return 0
      }

      if (order === 'created_at') {
        if (a.product.data.created_at > b.product.data.created_at) {
          return orderType === 'ASC' ? 1 : -1
        }
        if (a.product.data.created_at < b.product.data.created_at) {
          return orderType === 'ASC' ? -1 : 1
        }
        return 0
      }

      return 0
    })
  }

  const total = filtered.length
  filtered = filtered.slice((page - 1) * limit, page * limit)

  return {
    total,
    list: filtered
  }
}

export { filterFavorites }

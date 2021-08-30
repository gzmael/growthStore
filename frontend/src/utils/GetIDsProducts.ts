/* eslint-disable import/no-cycle */
import { AxiosInstance } from 'axios'

import { Candy, Pet, Product } from '@models/Product'
import { ProdFavList, SpecificationsList } from '@models/SearchDTOs'
import { Specification } from '@models/Specifications'
import { Favorite } from '@models/User'
import { apiSource } from '@services/apis'

interface ReponseIdProducts {
  total: number
  list: SpecificationsList[]
  products: ProdFavList[]
}

const generateMenuSpecList = (
  specList: Specification[]
): SpecificationsList[] => {
  const listName: SpecificationsList[] = []
  specList.forEach(specification => {
    const hasOnList = listName.find(item => item.name === specification.name)
    if (!hasOnList) {
      listName.push({
        name: specification.name,
        items: specList.filter(
          filterItem => filterItem.name === specification.name
        )
      })
    }
  })

  return listName
}

const getIDsProducts = async (
  favorites: Favorite[]
): Promise<ReponseIdProducts> => {
  const favoriteCandysIds: string[] = favorites
    .filter(favorite => favorite.source_type === 'candys')
    .map(fav => fav.source_id)
  let api: AxiosInstance
  const listProduct: Product[] = []
  const specList: Specification[] = []
  let total = 0

  const favoritePetsIds: string[] = favorites
    .filter(favorite => favorite.source_type === 'pets')
    .map(fav => fav.source_id)

  if (favoriteCandysIds.length > 0) {
    api = apiSource('candys')

    const responseSpecCandys = await api.get('/candys/list', {
      params: {
        ids: favoriteCandysIds
      }
    })
    const candys = responseSpecCandys.data as Candy[]
    total += candys.length

    candys.forEach(candy => {
      const { specifications } = candy
      specifications.forEach(spec => {
        if (!specList.some(s => s.description === spec.description)) {
          specList.push(spec)
        }
      })
      listProduct.push({ data: candy, type: 'candys' })
    })
  }

  if (favoritePetsIds.length > 0) {
    api = apiSource('pets')
    const responseSpecPets = await api.get('/pets/list', {
      params: {
        ids: favoritePetsIds
      }
    })
    const pets = responseSpecPets.data as Pet[]
    total += pets.length

    pets.forEach(pet => {
      const { specifications } = pet
      specifications.forEach(spec => {
        if (!specList.some(s => s.description === spec.description)) {
          specList.push(spec)
        }
      })

      listProduct.push({ data: pet, type: 'pets' })
    })
  }

  if (favorites.length > 0) {
    const listName = generateMenuSpecList(specList)

    const allList = favorites.map(favorite => {
      const product = listProduct.find(
        ({ data, type }) =>
          favorite.source_id === data.public_id && type === favorite.source_type
      )

      return {
        product,
        specifications: product.data.specifications,
        favorite
      }
    })

    return {
      total,
      list: listName,
      products: allList
    }
  }

  return {
    total: 0,
    list: [],
    products: []
  }
}

export { getIDsProducts, generateMenuSpecList }

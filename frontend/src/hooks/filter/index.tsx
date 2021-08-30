import { createContext, ReactNode, useEffect, useState } from 'react'

import { FilterFields } from '@models/SearchDTOs'

type FilterProviderProps = {
  children: ReactNode
}

type FilterContextData = {
  filter: FilterFields
  updateFilter: (filter: FilterFields) => void
}

export const FilterContext = createContext({} as FilterContextData)

export function FilterProvider({ children }: FilterProviderProps): JSX.Element {
  const [filter, setFilter] = useState<FilterFields>(() => {
    if (process.browser) {
      const filterCached = window.localStorage.getItem('filterSource')
      if (filterCached) {
        return JSON.parse(filterCached)
      }
    }

    return {
      page: 1,
      limit: 12
    }
  })

  useEffect(() => {
    if (filter) {
      window.localStorage.setItem('filterSource', JSON.stringify(filter))
    }
  }, [filter])

  function updateFilter(newFilter: FilterFields) {
    setFilter(newFilter)
  }

  return (
    <FilterContext.Provider
      value={{
        filter,
        updateFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

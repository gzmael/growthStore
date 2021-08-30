import React from 'react'

import { AuthProvider } from './auth'
import { FilterProvider } from './filter'

interface IAppProps {
  children: React.ReactNode
}

const AppProvider = ({ children }: IAppProps) => {
  return (
    <FilterProvider>
      <AuthProvider>{children}</AuthProvider>
    </FilterProvider>
  )
}

export { AppProvider }

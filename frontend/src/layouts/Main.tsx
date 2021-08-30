import React from 'react'

import { Layout, BackTop } from 'antd'

import { Footer } from '@components/Footer'
import { MenuTopo } from '@components/MenuTopo'

interface IMainProps {
  children: React.ReactNode
}

const Main = ({ children }: IMainProps) => {
  return (
    <Layout className="layout">
      <MenuTopo />
      <Layout>{children}</Layout>
      <BackTop />
      <Footer />
    </Layout>
  )
}

export { Main }

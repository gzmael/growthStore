import React from 'react'

import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Link from 'next/link'

interface BreadcrumbProps {
  query?: string
  type: string
}

const BreadcrumbProducts = ({ type, query }: BreadcrumbProps) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item key="home">
        <Link href="/">
          <a>
            <HomeOutlined />
          </a>
        </Link>
      </Breadcrumb.Item>
      {query ? (
        <>
          <Breadcrumb.Item key={type}>
            <Link href={`/search/${type}`}>
              <a>Search {type}</a>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="search">&quot;{query}&quot;</Breadcrumb.Item>
        </>
      ) : (
        <Breadcrumb.Item key={type}>Search {type}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
}

export { BreadcrumbProducts }

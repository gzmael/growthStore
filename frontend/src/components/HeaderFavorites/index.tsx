import React, { useContext } from 'react'

import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Col, Layout, Row, Select, Typography, Input } from 'antd'
import Link from 'next/link'

import { AuthContext } from '@hooks/auth'
import { FilterFields } from '@models/SearchDTOs'

const { Header } = Layout
const { Option } = Select
const { Text } = Typography

interface HeaderProductsProps {
  query: string
}

const types = {
  'asc-name': 'Name',
  'asc-price': 'Lower Price',
  'desc-price': 'Higher Price',
  'desc-created_at': 'Most Recent',
  'asc-created_at': 'Most Older'
}

function getDefaultOrder(filterFav: FilterFields) {
  if (filterFav.order && filterFav.orderType) {
    return [filterFav.orderType.toLowerCase(), filterFav.order].join('-')
  }
  return 'desc-created_at'
}

const HeaderFavorites = ({ query }: HeaderProductsProps) => {
  const { filter, setFilter } = useContext(AuthContext)
  const orderDefault = getDefaultOrder(filter)

  function handleChange(value: string) {
    const [order, field] = value.split('-')
    setFilter({
      ...filter,
      order: field,
      orderType: order.toUpperCase()
    })
  }

  function handleSearch(value: string) {
    setFilter({
      ...filter,
      query: encodeURI(value)
    })
  }

  return (
    <Header className="header-products">
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
            <Breadcrumb.Item key="favorites">
              <Link href="/favorites">
                <a>Favorites</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key="search">&quot;{query}&quot;</Breadcrumb.Item>
          </>
        ) : (
          <Breadcrumb.Item key="favorites">Search on Favorites</Breadcrumb.Item>
        )}
      </Breadcrumb>
      <Row gutter={16}>
        <Col>
          <Text>Search: </Text>
        </Col>
        <Col>
          <Input.Search
            allowClear
            style={{ width: '70%' }}
            placeholder="What are you search for?"
            onSearch={handleSearch}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Text>Order by: </Text>
        </Col>
        <Col>
          <Select
            defaultValue={types[orderDefault] || 'Most Recent'}
            style={{ width: 200 }}
            onChange={handleChange}
            bordered
          >
            <Option value="asc-name">Name</Option>
            <Option value="asc-price">Lower Price</Option>
            <Option value="desc-price">Higher Price</Option>
            <Option value="desc-created_at">Most Recent</Option>
            <Option value="asc-created_at">Most Older</Option>
          </Select>
        </Col>
      </Row>
    </Header>
  )
}
export { HeaderFavorites }

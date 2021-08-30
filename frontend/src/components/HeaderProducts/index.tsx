import React, { useContext } from 'react'

import { Col, Layout, Row, Select, Typography } from 'antd'

import { BreadcrumbProducts } from '@components/BreadcrumbProducts'
import { FilterContext } from '@hooks/filter'
import { FilterFields } from '@models/SearchDTOs'

const { Header } = Layout
const { Option } = Select
const { Text } = Typography

interface HeaderProductsProps {
  query: string
  type: string
}

const types = {
  'asc-name': 'Name',
  'desc-brand': 'Brand Name',
  'desc-rating': 'Best Rating',
  'desc-gener': 'Gener',
  'desc-breed': 'Breed',
  'asc-price': 'Lower Price',
  'desc-price': 'Higher Price',
  'desc-created_at': 'Most Recent'
}
function getDefaultOrder(filterFav: FilterFields) {
  if (filterFav.order && filterFav.orderType) {
    return [filterFav.orderType.toLowerCase(), filterFav.order].join('-')
  }
  return 'desc-created_at'
}

const HeaderProducts = ({ query, type }: HeaderProductsProps) => {
  const { filter, updateFilter } = useContext(FilterContext)
  const orderDefault = getDefaultOrder(filter)

  function handleChange(value: string) {
    const [order, field] = value.split('-')
    updateFilter({
      ...filter,
      order: field,
      orderType: order.toUpperCase()
    })
  }

  return (
    <Header className="header-products">
      <BreadcrumbProducts type={type} query={query} />
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
            {type === 'candys' ? (
              <>
                <Option value="desc-brand">Brand Name</Option>
                <Option value="desc-rating">Best Rating</Option>
              </>
            ) : (
              <>
                <Option value="desc-gener">Gener</Option>
                <Option value="desc-breed">Breed</Option>
              </>
            )}
            <Option value="asc-price">Lower Price</Option>
            <Option value="desc-price">Higher Price</Option>
            <Option value="desc-created_at">Most Recent</Option>
          </Select>
        </Col>
      </Row>
    </Header>
  )
}
export { HeaderProducts }

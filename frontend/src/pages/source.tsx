import React, { useContext, useEffect, useState } from 'react'

import { Layout, Typography, Row, Col, Pagination, Button } from 'antd'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Image from 'next/image'

import { HeaderProducts } from '@components/HeaderProducts'
import LoadingProducts from '@components/LoadingProducts'
import { ProductItem } from '@components/ProductItem'
import { SEO } from '@components/SEO'
import { SiderBar } from '@components/Siderbar'
import { FilterContext } from '@hooks/filter'
import { Main } from '@layouts/Main'
import {
  ProductType,
  ResponseSourceData,
  SpecificationsList
} from '@models/SearchDTOs'
import { Specification } from '@models/Specifications'
import { apiSource } from '@services/apis'
import { generateMenuSpecList } from '@utils/GetIDsProducts'

import candysImg from '../../public/images/candy.jpg'
import petsImg from '../../public/images/pets.jpg'

const { Content } = Layout
const { Title } = Typography

function Search() {
  const [total, setTotal] = useState(0)
  const [, setTotalFiltered] = useState(0)
  const [loading, setLoading] = useState(false)
  const { filter, updateFilter } = useContext(FilterContext)
  const [productsList, setProductsList] = useState<ProductType[]>([])
  const [specificationsSource, setSpecificationsSource] = useState<
    SpecificationsList[]
  >([])

  useEffect(() => {
    async function getSource() {
      setLoading(true)
      const { limit, order, orderType, page, query, specifications, type } =
        filter
      const api = apiSource(type)

      const response = await api.get(`/${type}`, {
        params: {
          page: Number(page) || 1,
          limit: Number(limit) || 12,
          order: order as string,
          orderType: orderType as string,
          filter: query as string,
          specifications
        }
      })
      const {
        total: totalResponse,
        totalFiltered: totalFilteredResponse,
        data
      } = response.data as ResponseSourceData
      setTotal(totalResponse)
      setTotalFiltered(totalFilteredResponse)
      setProductsList(data)

      const responseSpec = await api.get('/specifications')
      const specificationsData = responseSpec.data as Specification[]
      const listName = generateMenuSpecList(specificationsData)

      setSpecificationsSource(listName)

      setLoading(false)
    }

    if (filter.type) {
      getSource()
    }
  }, [filter])

  function handleChangePage(newPage: number) {
    updateFilter({
      ...filter,
      page: newPage
    })
  }

  const handleSetSource = (type: string) => {
    updateFilter({
      type: type === 'candys' ? 'candys' : 'pets',
      page: 1,
      limit: 12
    })
  }

  return (
    <Main>
      <SEO title={`Searching on ${filter.type || 'Source'}`} />
      <Layout className="container mt-4">
        {filter.type && (
          <>
            <HeaderProducts type={filter.type} query={filter.query} />
            <Layout>
              <SiderBar
                list={specificationsSource}
                type={filter.type}
                total={total}
              />
              <Content className="content">
                {productsList.length === 0 && !loading && (
                  <Title level={4} style={{ textAlign: 'center' }}>
                    No products found
                  </Title>
                )}
                {productsList.length > 0 && !loading && (
                  <>
                    <Row gutter={[16, 16]} className="grid_products">
                      {productsList.map(source => (
                        <ProductItem
                          key={source.public_id}
                          product={{ data: source, type: filter.type }}
                          size={8}
                        />
                      ))}
                    </Row>
                    <Pagination
                      current={filter.page}
                      onChange={handleChangePage}
                      total={total}
                      className="pagination"
                      pageSize={filter.limit}
                    />
                  </>
                )}
                {loading && <LoadingProducts />}
              </Content>
            </Layout>
          </>
        )}
        {!filter.type && (
          <>
            <Title level={4} style={{ textAlign: 'center' }}>
              Welcome to GrowthStore, select a Store
            </Title>
            <Row className="banners" gutter={[16, 16]}>
              <Col span={12}>
                <Button
                  type="link"
                  onClick={() => handleSetSource('pets')}
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={petsImg}
                    alt="Candys Banner"
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                  />
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  type="link"
                  onClick={() => handleSetSource('candys')}
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={candysImg}
                    alt="Candys Banner"
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                  />
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Layout>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  _ctx: GetServerSidePropsContext
) => {
  return {
    props: {}
  }
}

export default Search

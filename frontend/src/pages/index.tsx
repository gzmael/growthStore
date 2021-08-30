import { useContext, useEffect, useState } from 'react'

import { HomeOutlined } from '@ant-design/icons'
import { Layout, Typography, Breadcrumb, Row, Col, Button } from 'antd'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { ProductItem } from '@components/ProductItem'
import { SEO } from '@components/SEO'
import { AuthContext } from '@hooks/auth'
import { FilterContext } from '@hooks/filter'
import { Main } from '@layouts/Main'
import { Candy, Pet, Product } from '@models/Product'
import { apiSource } from '@services/apis'

import candysImg from '../../public/images/candy.jpg'
import petsImg from '../../public/images/pets.jpg'

const { Content } = Layout
const { Title } = Typography

interface ProdFavs {
  product: Product
  isFav: boolean
  favId?: string
}

interface IHomeProps {
  products: Product[]
}

function Home({ products }: IHomeProps) {
  const { user } = useContext(AuthContext)
  const { updateFilter } = useContext(FilterContext)
  const Router = useRouter()
  const [prodFavs, setProdFavs] = useState<ProdFavs[]>([])

  useEffect(() => {
    if (user?.favorites) {
      setProdFavs(
        products.map(product => {
          const hasFav = user.favorites.find(
            fav =>
              fav.source_id === product.data.public_id &&
              fav.source_type === product.type
          )

          return {
            isFav: !!hasFav,
            product,
            favId: hasFav?.id
          }
        })
      )
    } else {
      setProdFavs(
        products.map(product => ({
          isFav: false,
          product
        }))
      )
    }
  }, [products, user])

  const handleSetSource = (type: string) => {
    updateFilter({
      type: type === 'candys' ? 'candys' : 'pets',
      page: 1,
      limit: 12
    })
    Router.push('/source')
  }

  return (
    <Main>
      <SEO title="GrowthStore" />
      <Layout className="container">
        <Content className="mt-4">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
          </Breadcrumb>
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
          {products && (
            <>
              <Title level={4}>Our Products</Title>
              <Row gutter={[16, 16]} className="grid_products">
                {prodFavs.map(product => {
                  return (
                    <ProductItem
                      key={product.product.data.public_id}
                      product={product.product}
                      size={6}
                    />
                  )
                })}
              </Row>
            </>
          )}
        </Content>
      </Layout>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps<IHomeProps> =
  async _ctx => {
    const products: Product[] = []
    const apiCandys = apiSource('candys')
    const apiPets = apiSource('pets')

    const responseCandys = await apiCandys.get('/candys', {
      params: {
        limit: 6
      }
    })

    await apiPets
      .get('/pets', {
        params: {
          limit: 6
        }
      })
      .then(res => {
        const { data: pets } = res.data

        pets.forEach((pet: Pet) => {
          products.push({
            data: pet,
            type: 'pets'
          })
        })
      })

    if (responseCandys.data) {
      const { data: candys } = responseCandys.data

      candys.forEach((candy: Candy) => {
        products.push({
          data: candy,
          type: 'candys'
        })
      })
    }

    products.sort((a, b) => (a.data.created_at < b.data.created_at ? 1 : -1))

    return {
      props: {
        products
      }
    }
  }

export default Home

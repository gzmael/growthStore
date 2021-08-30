import React, { useContext, useEffect, useState } from 'react'

import { Layout, Typography, Row, Pagination } from 'antd'

import { HeaderFavorites } from '@components/HeaderFavorites'
import LoadingProducts from '@components/LoadingProducts'
import { ProductFavorite } from '@components/ProductFavorite'
import { SEO } from '@components/SEO'
import { SiderBarFav } from '@components/SiderBarFav'
import { AuthContext } from '@hooks/auth'
import { Main } from '@layouts/Main'
import { User } from '@models/User'
import { getApiClient } from '@services/axios'
import { withSSRAuth } from '@utils/withSSRAuth'

const { Content } = Layout
const { Title } = Typography

interface IFavoritesProps {
  user: User
}

function Favorites({ user }: IFavoritesProps) {
  const {
    isAuthenticated,
    updateUser,
    user: userLocal,
    filter,
    setFilter,
    favoriteList,
    specificationsFav,
    totalFiltered
  } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getUser() {
      setLoading(true)
      if (!isAuthenticated && user) {
        await updateUser(user)
      }

      setLoading(false)
    }
    getUser()
  }, [isAuthenticated, updateUser, user, userLocal])

  function handleChangePage(newPage: number) {
    setFilter({
      ...filter,
      page: newPage
    })
  }

  return (
    <Main>
      <SEO title="Favorites" />
      <Layout className="container mt-4">
        <HeaderFavorites query={filter.query} />
        <Layout>
          <SiderBarFav
            list={specificationsFav}
            type="Favorites"
            total={favoriteList.length}
          />
          <Content className="content">
            {userLocal && favoriteList.length === 0 && !loading && (
              <Title level={4} style={{ textAlign: 'center' }}>
                No Favorites found
              </Title>
            )}
            {userLocal && favoriteList.length > 0 && !loading && (
              <>
                <Row gutter={[16, 16]} className="grid_products">
                  {favoriteList.map(source => (
                    <ProductFavorite
                      key={source.product.data.public_id}
                      size={8}
                      favorite={source.favorite}
                      product={source.product}
                    />
                  ))}
                </Row>
                <Pagination
                  current={filter.page}
                  onChange={handleChangePage}
                  total={totalFiltered}
                  className="pagination"
                  pageSize={filter.limit}
                />
              </>
            )}
            {loading && <LoadingProducts />}
          </Content>
        </Layout>
      </Layout>
    </Main>
  )
}

export const getServerSideProps = withSSRAuth<IFavoritesProps>(async ctx => {
  const api = getApiClient(ctx)

  const response = await api.get('/accounts/me')
  const user = response.data as User

  return {
    props: {
      user
    }
  }
})

export default Favorites

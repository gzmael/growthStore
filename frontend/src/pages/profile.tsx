import React, { useContext, useEffect } from 'react'

import { HomeOutlined } from '@ant-design/icons'
import { Layout, Typography, Breadcrumb } from 'antd'

import { SEO } from '@components/SEO'
import { AuthContext } from '@hooks/auth'
import { Main } from '@layouts/Main'
import { User } from '@models/User'
import { getApiClient } from '@services/axios'
import { withSSRAuth } from '@utils/withSSRAuth'

const { Content } = Layout
const { Title } = Typography

interface IProfileProps {
  user: User
}

function Profile({ user }: IProfileProps) {
  const { isAuthenticated, updateUser } = useContext(AuthContext)

  useEffect(() => {
    async function getUser() {
      if (!isAuthenticated && user) {
        await updateUser(user)
      }
    }
    getUser()
  }, [isAuthenticated, updateUser, user])

  return (
    <Main>
      <SEO title="Profile" />
      <Content className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
        </Breadcrumb>
        <Title>Welcome {user.name}</Title>
      </Content>
    </Main>
  )
}

export const getServerSideProps = withSSRAuth<IProfileProps>(async ctx => {
  const api = getApiClient(ctx)

  const response = await api.get('/accounts/me')
  const user = response.data as User

  return {
    props: {
      user
    }
  }
})

export default Profile

import React from 'react'

import { HomeOutlined } from '@ant-design/icons'
import { Layout, Typography, Breadcrumb } from 'antd'

import { FormSignIn } from '@components/FormSignIn'
import { withSSRGuest } from '@utils/WithSSRGuest'

import { SEO } from '../components/SEO'
import { Main } from '../layouts/Main'

const { Content } = Layout
const { Title } = Typography

function SignIn() {
  return (
    <Main>
      <SEO title="GrothwStore | Sign In" />
      <Content className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="login">Login</Breadcrumb.Item>
        </Breadcrumb>
        <Title>Login</Title>
        <div className="wrapper">
          <FormSignIn />
        </div>
      </Content>
    </Main>
  )
}

export const getServerSideProps = withSSRGuest(async _ctx => {
  return {
    props: {}
  }
})

export default SignIn

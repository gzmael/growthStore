import React from 'react'

import { HomeOutlined } from '@ant-design/icons'
import { Layout, Typography, Breadcrumb } from 'antd'

import { FormSignUp } from '@components/FormSignUp'
import { SEO } from '@components/SEO'
import { Main } from '@layouts/Main'

const { Content } = Layout
const { Title } = Typography

function SignUp() {
  return (
    <Main>
      <SEO title="GrowthStore | Login" />
      <Content className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="singup">Sign Up</Breadcrumb.Item>
        </Breadcrumb>
        <Title>Login</Title>
        <div className="wrapper">
          <FormSignUp />
        </div>
      </Content>
    </Main>
  )
}

export default SignUp

import React, { useCallback, useState } from 'react'

import { Form, Input, Button, message } from 'antd'
import { useRouter } from 'next/router'

import { getApiClient } from '@services/axios'

interface FormLogin {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const api = getApiClient()

const FormSignUp = () => {
  const Router = useRouter()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = useCallback(
    async (data: FormLogin) => {
      setLoading(true)
      const { email, password, name, password_confirmation } = data

      try {
        await api
          .post('/accounts', {
            email,
            password,
            name,
            password_confirmation
          })
          .then(() => {
            message.success('You have successfully registered')
            form.resetFields()
          })
      } catch (err) {
        message.error(`Sign Up Error: ${err.message}`)
      }
      setLoading(false)
    },
    [form]
  )

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      className="form_login"
      form={form}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your e-mail!',
            type: 'email'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Password Confirmation"
        name="password_confirmation"
        rules={[
          {
            required: true,
            message: 'Please input your password confirmation!'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <footer>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {loading ? 'Loading...' : 'Sign Up'}
          </Button>
        </Form.Item>
        <Button
          type="link"
          htmlType="button"
          onClick={() => Router.push('/signin')}
        >
          I have a account
        </Button>
      </footer>
    </Form>
  )
}

export { FormSignUp }

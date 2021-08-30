import React, { useCallback, useContext, useState } from 'react'

import { Form, Input, Button, Checkbox, message } from 'antd'
import { useRouter } from 'next/router'

import { AuthContext } from '@hooks/auth'

interface FormData {
  email: string
  password: string
}

const FormSignIn = () => {
  const Router = useRouter()
  const [loading, setLoading] = useState(false)
  const { signIn } = useContext(AuthContext)

  const onFinish = useCallback(
    async (data: FormData) => {
      setLoading(true)
      const { email, password } = data

      try {
        await signIn({
          email,
          password
        })
      } catch (err) {
        message.error(`SignIn Error: ${err.message}`)
      }
      setLoading(false)
    },
    [signIn]
  )

  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="form_login"
      >
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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <footer>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {loading ? 'Loading...' : 'Sign In'}
            </Button>
          </Form.Item>
          <Button
            type="link"
            onClick={() => Router.push('/signup')}
            htmlType="submit"
          >
            Sign Up
          </Button>
        </footer>
      </Form>
    </>
  )
}

export { FormSignIn }

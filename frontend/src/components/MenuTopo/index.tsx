import React, { useContext, useEffect, useState } from 'react'

import { LogoutOutlined } from '@ant-design/icons'
import { Layout, Menu, Input, Select, Dropdown, Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AuthContext } from '@hooks/auth'
import { FilterContext } from '@hooks/filter'

import styles from './MenuTopo.module.css'

const { Option } = Select

const { Header } = Layout

const MenuTopo = () => {
  const { isAuthenticated, destroyUser, user } = useContext(AuthContext)
  const { updateFilter } = useContext(FilterContext)
  const [type, setType] = useState('')
  const Router = useRouter()
  const newRedirect = Router.pathname !== '/signin' && Router.pathname

  useEffect(() => {
    if (!isAuthenticated && user) {
      destroyUser()
    }
  }, [destroyUser, isAuthenticated, user])

  function handleChangeType(newType: string) {
    updateFilter({
      limit: 12,
      page: 1,
      type: newType === 'candys' ? 'candys' : 'pets'
    })
    setType(newType)
  }

  function handleSearch(value: string) {
    if (type) {
      Router.push(
        {
          pathname: `/source`,
          query: {
            query: encodeURI(value)
          }
        },
        undefined,
        { shallow: false }
      )
    }
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/favorites">
          <a>Favorites</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="23">
        <Button type="link" icon={<LogoutOutlined />} onClick={destroyUser}>
          Log Out
        </Button>
      </Menu.Item>
    </Menu>
  )

  return (
    <Header className={styles.menu}>
      <div className={styles.containerMenu}>
        <div className={styles.left}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src="/logo.svg"
                alt="Logo GrowthStore"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
          <Input.Group compact>
            <Select defaultValue="Stores" onChange={handleChangeType}>
              <Option value="pets">PetShop</Option>
              <Option value="candys">Candys</Option>
            </Select>
            <Input.Search
              allowClear
              style={{ width: '70%' }}
              placeholder="What are you search for?"
              onSearch={handleSearch}
            />
          </Input.Group>
        </div>
        {user && (
          <Menu className={styles.menu}>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>{user.name}</Button>
            </Dropdown>
          </Menu>
        )}
        {!user && (
          <Menu className={styles.menu}>
            <Menu.Item key="3">
              <Link
                href={
                  newRedirect ? `/signin?redirect=${newRedirect}` : '/sigin'
                }
              >
                <a>Sign In</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" className={styles.signUp}>
              <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </Menu.Item>
          </Menu>
        )}
      </div>
    </Header>
  )
}

export { MenuTopo }

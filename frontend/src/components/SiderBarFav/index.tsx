import React, { useCallback, useContext } from 'react'

import { Layout, List, Typography, Checkbox, Row, Form } from 'antd'
import { useForm } from 'antd/lib/form/util'

import { AuthContext } from '@hooks/auth'
import { Specification } from '@models/Specifications'

const { Sider } = Layout
const { Title, Text } = Typography

interface SpecificationsList {
  name: string
  items: Specification[]
}

interface ISiderBarProps {
  list: SpecificationsList[]
  type: string
  total: number
}

const SiderBarFav = ({ list, type, total }: ISiderBarProps) => {
  const [form] = useForm()
  const { filter, setFilter } = useContext(AuthContext)

  const handleChange = useCallback(
    (value: string) => {
      let newSpecifications = []

      if (filter && filter.specifications) {
        const hasSpecification = filter.specifications.find(
          specification => specification === value
        )

        if (hasSpecification) {
          newSpecifications = filter.specifications.filter(
            specification => specification !== value
          )
          setFilter({
            ...filter,
            specifications: newSpecifications
          })
        } else {
          newSpecifications = [...filter.specifications, value]

          setFilter({
            ...filter,
            specifications: newSpecifications
          })
        }
      } else {
        newSpecifications.push(value)
        setFilter({
          ...filter,
          specifications: newSpecifications
        })
      }
    },
    [filter, setFilter]
  )

  return (
    <Sider theme="light" style={{ background: 'none' }}>
      <Title level={2} style={{ textTransform: 'capitalize', margin: 0 }}>
        {type}
      </Title>
      <Text>{total} results</Text>
      <Form form={form}>
        <List
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <Text strong>{item.name}</Text>
              {item.items.map(specification => (
                <Row key={specification.public_id}>
                  <Checkbox
                    name={specification.description}
                    onChange={e => handleChange(e.target.name)}
                    defaultChecked={
                      filter?.specifications &&
                      filter.specifications.includes(specification.description)
                    }
                  >
                    {specification.description}
                  </Checkbox>
                </Row>
              ))}
            </List.Item>
          )}
        />
      </Form>
    </Sider>
  )
}

export { SiderBarFav }

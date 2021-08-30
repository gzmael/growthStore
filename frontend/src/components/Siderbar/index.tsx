import React, { useCallback, useContext } from 'react'

import { FilterContext } from '@hooks/filter'
import { Specification } from '@models/Specifications'
import { Layout, List, Typography, Checkbox, Row, Form } from 'antd'
import { useForm } from 'antd/lib/form/util'

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

const SiderBar = ({ list, type, total }: ISiderBarProps) => {
  const [form] = useForm()
  const { filter, updateFilter } = useContext(FilterContext)

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
          updateFilter({
            ...filter,
            specifications: newSpecifications
          })
        } else {
          newSpecifications = [...filter.specifications, value]
          // setSpecifications(newSpecifications)

          updateFilter({
            ...filter,
            specifications: newSpecifications
          })
        }
      } else {
        newSpecifications.push(value)
        updateFilter({
          ...filter,
          specifications: newSpecifications
        })
      }
    },
    [filter, updateFilter]
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
                    name={specification.public_id}
                    onChange={() => handleChange(specification.public_id)}
                    defaultChecked={
                      filter?.specifications &&
                      filter.specifications.includes(specification.public_id)
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

export { SiderBar }

import React, { useContext } from 'react'

import { DeleteTwoTone, createFromIconfontCN } from '@ant-design/icons'
import { Col, Button, message, Typography, Card, Rate } from 'antd'
import Image from 'next/image'

import { AuthContext } from '@hooks/auth'
import { Candy, Pet, Product } from '@models/Product'
import { Favorite } from '@models/User'
import { api } from '@services/apis'

const { Meta } = Card
const { Text } = Typography

interface ProductFavoriteProps {
  favorite: Favorite
  product: Product
  size?: number
}

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2772012_nb9wiklf0bg.js'
})

const ProductFavorite = ({ favorite, size, product }: ProductFavoriteProps) => {
  const { id } = favorite
  const { name, price, photo } = product.data
  const { updateUser, user } = useContext(AuthContext)

  function getDataCandy(candy: Candy) {
    return (
      <>
        <Meta title={candy.brand} />
        <Rate allowHalf defaultValue={candy.rating} />
      </>
    )
  }

  function getDataPets(pet: Pet) {
    return (
      <Meta
        title={
          pet.gener === 'male' ? (
            <IconFont type="icon-male" />
          ) : (
            <IconFont type="icon-female" />
          )
        }
        description={<Text style={{ fontSize: 14 }}>Breed: {pet.breed}</Text>}
      />
    )
  }

  const handleFav = async () => {
    await api
      .delete(`/favorites/${id}`)
      .then(async () => {
        await updateUser({
          ...user,
          favorites: user.favorites.filter(fav => fav.id !== id)
        })
      })
      .catch(err => {
        message.error(`Error to delete this Favorite: ${err.message}`)
      })
  }

  return (
    <Col span={size}>
      <Card
        className="product"
        hoverable
        cover={
          <>
            <Image
              src={photo}
              alt={`Photo by ${name}`}
              layout="fill"
              objectFit="cover"
            />
          </>
        }
      >
        {favorite.source_type === 'candys' &&
          getDataCandy(product.data as Candy)}
        {favorite.source_type === 'pets' && getDataPets(product.data as Pet)}
        <Meta title={name} description={`R$ ${price}`} />
        <Button
          type="link"
          onClick={handleFav}
          style={{ bottom: 0, top: 'auto', right: 0 }}
        >
          <DeleteTwoTone twoToneColor="#ff1111" style={{ fontSize: '24px' }} />
        </Button>
      </Card>
    </Col>
  )
}

export { ProductFavorite }

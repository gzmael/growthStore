import React, { useContext, useEffect, useState } from 'react'

import { HeartTwoTone, createFromIconfontCN } from '@ant-design/icons'
import { Col, Button, message, Typography, Card, Rate } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { AuthContext } from '@hooks/auth'
import { Favorite } from '@models/User'
import { api } from '@services/apis'

import { Candy, Pet, Product } from '../../models/Product'

const { Text } = Typography
const { Meta } = Card

interface IProps {
  product: Product
  size?: number
}

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2772012_nb9wiklf0bg.js'
})

const ProductItem = ({ product, size = 6 }: IProps) => {
  const { public_id, name, price, photo } = product.data
  const { updateUser, user } = useContext(AuthContext)
  const [favorite, setFavorite] = useState<Favorite>()
  const router = useRouter()

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
        description={
          <Text ellipsis style={{ fontSize: 14 }}>
            Breed: {pet.breed}
          </Text>
        }
      />
    )
  }

  useEffect(() => {
    if (user && user?.favorites) {
      const isFavoriteProduct = user.favorites.find(
        fav =>
          fav.source_id === product.data.public_id &&
          fav.source_type === product.type
      )
      setFavorite(isFavoriteProduct)
    } else {
      setFavorite(null)
    }
  }, [product.data.public_id, product.type, user])

  const handleFav = async () => {
    if (user) {
      if (!favorite && user) {
        await api
          .post('/favorites', {
            source_id: public_id,
            source_type: product.type
          })
          .then(async res => {
            const newFavorite = res.data
            await updateUser({
              ...user,
              favorites: [...user.favorites, newFavorite]
            })
          })
          .catch(err => {
            message.error(`Error to favorite this Product: ${err.message}`)
          })
      } else {
        await api
          .delete(`/favorites/${favorite.id}`)
          .then(async () => {
            await updateUser({
              ...user,
              favorites: user.favorites.filter(fav => fav.id !== favorite.id)
            })
          })
          .catch(err => {
            message.error(`Error to delete this Favorite: ${err.message}`)
          })
      }
    } else {
      message.warning(
        <Text type="secondary">
          You need to{' '}
          <Button
            type="link"
            onClick={() => router.push('/signin')}
            style={{ margin: 0, padding: 0 }}
          >
            sign in{' '}
          </Button>
          first
        </Text>
      )
    }
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
            <Button
              type="text"
              onClick={e => {
                e.preventDefault()
                handleFav()
              }}
            >
              <HeartTwoTone
                twoToneColor={favorite ? '#eb2f96' : '#888'}
                style={{ fontSize: '24px' }}
              />
            </Button>
          </>
        }
      >
        {product.type === 'candys' && getDataCandy(product.data as Candy)}
        {product.type === 'pets' && getDataPets(product.data as Pet)}
        <Meta
          title={<Text ellipsis>{name}</Text>}
          description={`R$ ${price}`}
        />
      </Card>
    </Col>
  )
}

export { ProductItem }

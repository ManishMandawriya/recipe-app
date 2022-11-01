import React from 'react'
import AddToCart from './images/AddToCart'
import Indian from './Indian'
import { CartProvider } from 'react-use-cart'

const FoodDelivery = () => {
  return (
    <>
    <CartProvider>
        <Indian/>
        <AddToCart/>
        </CartProvider>
    </>
  )
}

export default FoodDelivery
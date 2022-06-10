import React from 'react'
import { ShopingCartStyled } from '../Styles/ShoppingCardStyled'

const ShopingCard = () => {
  return (
    <ShopingCartStyled     
    >
      <div className='shoping-cart closed'>
      <h1>Shoping Card</h1>
      <ul>
        <li>Item 1</li>

      </ul>
      </div>

    </ShopingCartStyled>
  )
}

export default ShopingCard
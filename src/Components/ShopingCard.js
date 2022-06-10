import React from 'react'
import { Button } from 'react-bootstrap'
import { ShopingCartStyled } from '../Styles/ShoppingCardStyled'

const ShopingCard = ({productos}) => {
  console.log('productos' , productos)  
  return (
    <ShopingCartStyled     
    >
      <div className='shoping-cart closed'>
      <h1>Shoping Card</h1>
      <ul>
        { productos?.length > 0 ?
          productos.map((producto, idx) => {
            return (
              <li key={idx}>
                <h2>{producto.title ?? producto.name}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${producto.poster_path}`} alt={producto.title} />
              </li>
            )
        })
      : 'No hay productos'}
      <li>
        <h2>Total: {productos?.length}</h2>
      </li>
        <li>
          <Button>Comprar</Button>
        </li>
      </ul>

      </div>

    </ShopingCartStyled>
  )
}

export default ShopingCard
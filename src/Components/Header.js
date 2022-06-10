import React from 'react'
import { HeaderStyled } from '../Styles/Header.styled'

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
      <h1>La tiendita</h1>
      <h3>
        Peliculas, y shows de todos los tiempos
      </h3>
      </div>
    </HeaderStyled>
  )
}

export default Header
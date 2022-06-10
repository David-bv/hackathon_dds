import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import NavBarHeader from '../Components/NavBarHeader'
import Main from '../Components/Main'

const Home = () => {
  const [products, setProducts] = React.useState([])

  return (
    <>
      <NavBarHeader productos={products}/>
      <Header/>   
      <Main setProductos={setProducts} />
      
      <button>
        <Link to="/products">asdhsajkd</Link>
      </button>
    </>
  )
}

export default Home
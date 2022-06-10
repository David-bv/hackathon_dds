import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import NavBarHeader from '../Components/NavBarHeader'

const Home = () => {
  return (
    <>
      <NavBarHeader/>
      <Header/>   
      
      <button>
        <Link to="/products">asdhsajkd</Link>
      </button>
    </>
  )
}

export default Home
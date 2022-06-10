import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import NavBarHeader from '../Components/NavBarHeader'
import Main from '../Components/Main'

const Home = () => {
  return (
    <>
      <NavBarHeader/>
      <Header/>   
      <Main/>
      
      <button>
        <Link to="/products">asdhsajkd</Link>
      </button>
    </>
  )
}

export default Home
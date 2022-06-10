import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Containers/Home';
import RenderProducts from '../Containers/RenderProducts';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />             
      <Route path="/products" element={<RenderProducts />} />    
    </Routes>
  </BrowserRouter>
  )
}

export default Router
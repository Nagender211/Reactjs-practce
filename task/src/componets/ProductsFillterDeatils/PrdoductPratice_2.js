import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Card from './Card'
import Product from './Product'
import NotFound from './NotFound'
import ProtetedRoute from './ProtetedRoute'
import ProductDeatils from './ProductDeatils'

const PrdoductPratice_2 = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/'element={<ProtetedRoute element={<Home />} />} />
            <Route exact path='/card' element={<ProtetedRoute element={<Card />} />} />
            <Route exact path='/product' element={<ProtetedRoute element={<Product />} />} />
            <Route exact path='/product-details/:id' element={<ProtetedRoute element={<ProductDeatils />} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default PrdoductPratice_2

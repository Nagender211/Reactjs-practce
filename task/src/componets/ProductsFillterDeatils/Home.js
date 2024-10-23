import React from 'react'
import Header from './Header'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';
const Home = () => {
    const jwtToken=Cookies.get('jwt-token');
    if (!jwtToken) {
        return <Navigate to='/login' />
    }
  return (
    <div>
        <Header />
        
      <h1>Hoome</h1>
    </div>
  )
}

export default Home

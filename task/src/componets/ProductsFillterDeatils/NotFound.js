import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div>
        {/* <Header /> */}
      404 not found 
      <button><Link to='/' style={{style: 'none'}}>Return Home</Link></button>
    </div>
  )
}

export default NotFound

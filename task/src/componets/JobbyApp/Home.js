import React from 'react'
import {Link, Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'


const Home=()=>{
  const jwtToken= Cookies.get('jwt-token');
  if(jwtToken === undefined){
    return <Navigate to='/login' />
  }
  return (
    <div>
      <h1>Hi welcome to the jobyy</h1>
      <Link to='/'>
      <button>HOME</button>
      </Link>
      <Link to='/jobs'>
      <button>Job's</button>
      </Link>
      <Link to='/login'>
      <button>Logout</button>
      </Link>
    </div>
  )
}
export default Home
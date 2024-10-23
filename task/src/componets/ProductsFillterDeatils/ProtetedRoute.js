import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';
const ProtetedRoute = ({element: Component}) => {
    const jwtToken=Cookies.get('jwt-token');
    if(jwtToken === undefined){
        return <Navigate to='/login' />
    }
  return Component;
}

export default ProtetedRoute

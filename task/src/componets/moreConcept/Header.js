import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/counter'>counter</Link>
            </li>
            <li> 
                <Link to='/post'>Post</Link>
            </li>
            <li>
                <Link to='/setState'>setState</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Header

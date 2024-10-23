import React from 'react'
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const {product,updateId}=props;
    const {brand,id,imageUrl,price,title,rating}=product
    const handleClick = () => {
        updateId(id)
    }
  return (
    <div>
    
      <h4>brand: {brand}</h4>
      <img src={imageUrl} alt={title} />
      <h5>id: {id}</h5>
      <Link to={`/product-details/${id}`}>

      <h5 onClick={handleClick}>title: {title}</h5>
      </Link>
      <h5>rating: {rating}</h5>

      <h5>price: {price}</h5>
    

    </div>
  )
}

export default AllProducts

import React from 'react'

const ProductDeatilsPost = (props) => {
    const {item}=props
    const {id,price,imageUrl,rating,brand,title}=item
  return (
    <div>
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{brand}</p>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        
      
    </div>
  )
}

export default ProductDeatilsPost

import React from 'react';

const Products = (props) => {
  const {product}=props;
  const {brand,id,imageUrl,price,rating,title}=product
  return (
    <div>
      <h3>Brand: {brand}</h3>
      <img src={imageUrl} alt={title} />
      <h4>Price: {price}</h4>
      <p>Rating: {rating}</p>
      <p>title: {title}</p>
    </div>
  );
}

export default Products;


// export default Products

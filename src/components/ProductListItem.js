import React from 'react';
import './ProductListItem.css';
const ProductListItem = ({ product }) => {
  console.log(product);
  return (
    <div className="ProductListItem">
      <img src={product.imageUrl} alt={product.name} />
      <p>${product.price}</p>
      <h3>{product.name}</h3>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductListItem;

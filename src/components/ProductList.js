import React from 'react';
import products from '../productsAPI';
import ProductListItem from './ProductListItem';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

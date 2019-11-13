import React from 'react';

const ProductProfile = ( { productId } ) => {
  let element = (
    <div>
      <h4>Product Profile Focus</h4>
      <p className="lead">Product ID: { productId }</p>
    </div>
  );
  return element;
};

export {ProductProfile};
import React , { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { products as myProducts } from '../../models/DataModels';

const ProductNav = () => {

  const [ products , setProducts ] = useState( [] );

  useEffect( () => {
    
    const fetchData = () => {
      setProducts( myProducts );
    }; 

    fetchData();

  } , [] );

  const productList = () => {
    return products.map( mapproducts );
  };
  
  const mapproducts = (el,idx,arr) => {
    
    let elemento = (
      <li key={el.id}>
        <NavLink to={`/products/${el.shortname}`} activeClassName={"active"}>
          { el.longname }
        </NavLink>
      </li>
    );
  
    return elemento;
  };

  let element = (
    <>
    <header>
      <h3>Popular Products</h3>
      <ul>
        { productList() }
      </ul>
    </header>
    </>
  );
  
  return element;
};

export {ProductNav};
import React , { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { products as myProducts } from '../../models/DataModels';

const BrowseProductTable = () => {

  const [ products , setProducts ] = useState( [] );

  useEffect( () => {
    
    const fetchData = () => {
      setProducts( myProducts );
    }; 

    fetchData();

  } , [] );

  const productRows = () => {
    return products.map( mapproductrows );
  };

  const mapproductrows = (el,idx,arr) => {
    
    let { id } = el;
    const ar_new_href = id.split('-');
    const shortname = ar_new_href[0];
    
    let elemento = (
      <tr key={el.id}>
        <th scope="row">{ shortname }</th>
        <td>{el.longname}</td>
        <td><NavLink to={`/products/${el.shortname}`}>Link to {el.shortname}</NavLink></td>
      </tr>
    );
  
    return elemento;
  };

  let element = (
    <>
      <table className="producttable table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          { productRows() }
        </tbody>
      </table>
    </>
  );

  return element;
};

export {BrowseProductTable};
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ProductNav } from "../../components/Product/ProductNav";
import { BrowseProductTable } from "../../components/BrowseProducts/BrowseProductTable";

import { MatchedProductDispatch } from "./MatchedProductDispatch";

const MatchedProductSubLayout = ( props ) => {

  const noOpLink = (event) => { event.preventDefault(); };
  
  let element = (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Browse Products</h1>
          <p><NavLink className="btn btn-primary btn-lg" onClick={ noOpLink } to="#" role="button">Learn more &raquo;</NavLink></p>
        </div>
      </div>

      <div className="container">

        <p>This is MatchedProductSubLayout! 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
          purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula
          erat erat nec elit. 
        </p>

        <div className="product-sub-layout">
          <aside>
            <ProductNav />
          </aside>

          <div className="primary-content">
            <h4>Products</h4>
            <BrowseProductTable />
          </div>

        </div>

        <MatchedProductDispatch props={props} />

      </div>
    </>
  );
  return element;
};

export {MatchedProductSubLayout};
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ProductNav } from "../../components/Product/ProductNav";
import { ProductProfile } from "../../components/Product/ProductProfile";

const ProductProfilePage = ( props ) => {

  // console.log( 'ProductProfilePage' , props );
  
  // console.log( 'ProductProfilePage' , props.history );
  // console.log( 'ProductProfilePage' , props.location );
  // console.log( 'ProductProfilePage' , props.staticContext ); // undefined

  // console.log( 'ProductProfilePage' , props.match );
  // console.log( 'ProductProfilePage' , props.match.isExact ); // true 
  // console.log( 'ProductProfilePage' , props.match.params ); // Object { id: "Slap" }
  // console.log( 'ProductProfilePage' , props.match.path ); // "/products/:id"
  // console.log( 'ProductProfilePage' , props.match.url ); // "/products/Slap"

  const noOpLink = (event) => { event.preventDefault(); };
  
  let element = (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">{ props.match.params.id }</h1>
          <p><NavLink className="btn btn-primary btn-lg" onClick={ noOpLink } to="#" role="button">Learn more &raquo;</NavLink></p>
        </div>
      </div>

      <div className="container">

        <p>This is ProductProfilePage! 
          Nullam aliquet,
          purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula
          erat erat nec elit. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>

        <div className="product-sub-layout">
          <aside>
            <ProductNav />
          </aside>
          <div className="primary-content">
            <ProductProfile productId={ props.match.params.id } />
          </div>
        </div>

      </div>
    </>
  );
  return element;
};

export {ProductProfilePage};
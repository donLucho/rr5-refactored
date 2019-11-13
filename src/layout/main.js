import React from 'react';

import { Nav } from './nav';
import { Footer } from './footer';

const Main = ( props ) => {
  
  // console.log( "MAIN.JS >>> props: ", props ); 

  const { routes } = props;

  let element = (
    <div className="container">
      
      <Nav routes={routes} />

      <main role="main">
        { props.children }
      </main>

      <Footer />

    </div>
  );

  return element;
};

export {Main};
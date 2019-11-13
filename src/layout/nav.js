import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ( { routes } ) => {
  
  // console.log( "nav.js >>> routes: " , routes );

  const noOpLink = (event) => { event.preventDefault(); };

  const ListItemMe = ( route, idx, arr ) => {
    
    // console.log( "map function >>> NAV.JS >>> EACH route: ", route );

    if( route.showInNav === true ){

      let elemento = (
        <li key={route.path} className="nav-item">
          <NavLink key={route.path} className="nav-link" to={ route.path } activeClassName={"active"} exact={ route.navmatch } >{route.name}</NavLink>
        </li>
      ); 
      return elemento;

    }
    
  };

  let element = (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      
      <NavLink className="navbar-brand" onClick={ noOpLink } to="">React Router 5</NavLink>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          
          { routes.map( ListItemMe ) }

        </ul>
      </div>

    </nav>
  );
  return element;
};

export {Nav};
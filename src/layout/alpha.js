import React from 'react';
import { BrowserRouter, Route, Switch /* , Redirect */ } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { DNEPage } from '../components/DNE/DNEPage';

import { Main } from './main';

import "../sass/animatepage.scss";

const Alpha = ( props ) => {

  // console.log( "ALPHA.JS >>> props: ", props ); 
  // RETURNS... Object { routes: (7) [...] }

  const SwitchMe = (route,idx,arr) => {
    return RouteMe(route);
  };

  const RouteMe = (route) => {
    
    // console.log( "map function >>> ALPHA.JS >>> EACH route: ", route );
    
    const { path, Component, navmatch } = route;

    return (
      <Route key={path} exact={navmatch} path={path}>

        { ( props ) => {
          
          // console.log( "ALPHA.JS >>> props: ", props ); 

          const { match } = props;
          // console.log( "ALPHA.JS >>> match: ", match );
          // RETURNS... Object { routes: (7) [...] }

          return (
            <CSSTransition 
            in={ match.isExact === true }
            timeout={356} 
            classNames="animatepage" 
            unmountOnExit
            appear
            >

              <div className="animatepage">
                <Component { ...props }/>
              </div>

            </CSSTransition>
          );
        } }
        
      </Route>
    );
  };
  
  let element = ( 
    <BrowserRouter>
      <Main routes={props.routes}>
        <Switch>
          
          { props.routes.map( SwitchMe ) }
          
          {/* version 1A -- redirect to index */}
          {/* <Redirect to="/" /> */}

          {/* version 2 -- redirect DNE page */}
          <Route component={ DNEPage } />

        </Switch>
      </Main>
    </BrowserRouter>
  );
  return element;

};

export {Alpha};
import React from 'react';
import { NavLink } from 'react-router-dom';

const DNEPage = () => {
  
  const noOpLink = (event) => { event.preventDefault(); };
  
  let element = (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">404, baby!!!</h1>   
          <p><NavLink className="btn btn-primary btn-lg" onClick={ noOpLink } to="#" role="button">Learn more &raquo;</NavLink></p>
        </div>
      </div>

      <div className="container">

        <p>Page Not Found.</p>

      </div>
    </>
  );
  return element;
};

export {DNEPage};
import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {

  const noOpLink = (event) => { event.preventDefault(); };
  
  let element = (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Home</h1>   
          <p><NavLink className="btn btn-primary btn-lg" onClick={ noOpLink } to="#" role="button">Learn more &raquo;</NavLink></p>
        </div>
      </div>

      <div className="container">

        <p>
          Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
          velit, quis faucibus libero congue et. Quisque convallis eu nisl et
          congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
          nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
          sollicitudin nibh lacus, ut bibendum risus elementum a.
        </p>

        <p className="badass">Yaba-grab-a-brew!</p>
        <hr />

        <p className="lead">
          &nbsp; 
          <span className="fas fa-info-circle"></span>
          &nbsp; 
          <span className="fas fa-check-square"></span>
          &nbsp; 
          <span className="fas fa-lg fa-exclamation-triangle"></span>
          &nbsp; 
          <span className="fas fa-2x fa-ban"></span>
          &nbsp; 
          <span className="fas fa-info-circle"></span>
          &nbsp; 
          <span className="fas fa-check-square"></span>
          &nbsp; 
          <span className="fas fa-lg fa-exclamation-triangle"></span>
          &nbsp; 
        </p>
        <hr />

      </div>
    </>
  );
  return element;
};

export {HomePage};
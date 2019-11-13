import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {

  const noOpLink = (event) => { event.preventDefault(); };
  
  let element = (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">About</h1>
          <p><NavLink className="btn btn-primary btn-lg" onClick={ noOpLink } to="#" role="button">Learn more &raquo;</NavLink></p>
        </div>
      </div>

      <div className="container">

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
          congue. In bibendum vestibulum orci et feugiat. 
          Nullam aliquet,purus vitae eleifend tristique, lorem magna volutpat orci, 
          et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. 
          Aenean vel porta turpis, ut iaculis justo.
        </p>

      </div>
    </>
  );
  return element;
};

export {AboutPage};
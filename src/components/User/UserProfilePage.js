import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserNav } from "../../components/User/UserNav";
import { UserProfile } from "../../components/User/UserProfile";

// toast this and put functionality in App.js or the data will "DISAPPEAR"
// import { UserSubDispatch } from "../../components/User/UserSubDispatch";


const UserProfilePage = ( props ) => {

  // console.log( 'UserProfilePage' , props );
  
  // console.log( 'UserProfilePage' , props.history );
  // console.log( 'UserProfilePage' , props.location );
  // console.log( 'UserProfilePage' , props.staticContext ); // undefined

  // console.log( 'UserProfilePage >>> props.match' , props.match );
  // console.log( 'UserProfilePage' , props.match.isExact ); // true 
  // console.log( 'UserProfilePage' , props.match.params ); // Object { id: "Curly" }
  // console.log( 'UserProfilePage' , props.match.path ); // "/users/:id"
  // console.log( 'UserProfilePage' , props.match.url ); // "/users/Curly"

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

        <p>This is UserProfilePage! 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
          purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula
          erat erat nec elit. 
        </p>

        <div className="user-sub-layout">
          <aside>
            <UserNav />
          </aside>
          <div className="primary-content">
            <UserProfile userId={ props.match.params.id } />
          </div>

          <div className="yada-yada-yada">
            <p>
              <NavLink to={ `${props.match.url}/settings` }>Faux User Settings</NavLink>
            </p>
            <p>
              <NavLink to={ `${props.match.url}/comments` }>Faux User Comments</NavLink>
            </p>
          </div>

          {/* <UserSubDispatch match={ props.match } /> */}
          
        </div>

      </div>
    </>
  );
  return element;
};

export {UserProfilePage};
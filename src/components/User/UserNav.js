import React , { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { users as myUsers } from '../../models/DataModels';

const UserNav = () => {

  const [ users , setUsers ] = useState( [] );

  useEffect( () => {
    
    const fetchData = () => {
      setUsers( myUsers );
    }; 

    fetchData();

  } , [] );

  const userList = () => {
    return users.map( mapusers );
  };
  
  const mapusers = (el,idx,arr) => {
    
    let elemento = (
      <li key={el.id}>
        <NavLink to={`/users/${el.name}`} activeClassName={"active"}>
          { el.name }
        </NavLink>
      </li>
    );
  
    return elemento;
  };

  let element = (
    <>
    <header>
      <h3>Popular Users</h3>
      <ul>
        { userList() }
      </ul>
    </header>
    </>
  );
  
  return element;  
  
};

export {UserNav};
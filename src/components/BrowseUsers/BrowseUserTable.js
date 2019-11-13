import React , { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { users as myUsers } from '../../models/DataModels';

const BrowseUserTable = () => {

  const [ users , setUsers ] = useState( [] );

  useEffect( () => {
    
    const fetchData = () => {
      setUsers( myUsers );
    }; 

    fetchData();

  } , [] );

  const userRows = () => {
    return users.map( mapuserrows );
  };

  const mapuserrows = (el,idx,arr) => {

    let { id } = el;
    const ar_new_href = id.split('-');
    const shortname = ar_new_href[0];
    
    let elemento = (
      <tr key={el.id}>
        <th scope="row">{ shortname }</th>
        <td>{el.name}</td>
        <td><NavLink to={`/users/${el.name}`}>Link to {el.name}</NavLink></td>
      </tr>
    );
  
    return elemento;
  };

  let element = (
    <>
      <table className="usertable table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          { userRows() }
        </tbody>
      </table>
    </>
  );

  return element;
};

export {BrowseUserTable};
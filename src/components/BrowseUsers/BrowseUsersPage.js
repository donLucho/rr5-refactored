import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserNav } from "../../components/User/UserNav";
import { BrowseUserTable } from "../../components/BrowseUsers/BrowseUserTable";

const BrowseUsersPage = () => {
  
  const noOpLink = (event) => { event.preventDefault(); };

  let element = (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Browse Users</h1>
          <p><NavLink className="btn btn-primary btn-lg" onClick={ noOpLink } to="#" role="button">Learn more &raquo;</NavLink></p>
        </div>
      </div>

      <div className="container">

        <p>This is BrowseUsersPage! 
          Lorem ipsum dolor sit amet. Aenean posuere nunc ac cursus facilisis. Aenean vel
          porta turpis, ut iaculis justo.
        </p>

        <div className="user-sub-layout">
          <aside>
            <UserNav />
          </aside>
          <div className="primary-content">
            <h4>Users</h4>
            <BrowseUserTable />
          </div>
        </div>

      </div>
    </>
  );
  return element;
};

export {BrowseUsersPage};
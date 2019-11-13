import React from 'react';
import { Switch, Route } from "react-router-dom";

import { BrowseUsersPage } from "../BrowseUsers/BrowseUsersPage";
import { UserProfilePage } from "./UserProfilePage";

const UserDispatch = () => {
  let element = (
    <Switch>
      <Route path="/users" component={ BrowseUsersPage } exact/>
      <Route path="/users/:id" component={ UserProfilePage } />
    </Switch>
  );
  return element;
};

export {UserDispatch};
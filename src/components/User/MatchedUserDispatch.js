import React from 'react';
import { Switch, Route } from "react-router-dom";

import { BrowseUsersPage } from "../BrowseUsers/BrowseUsersPage";
import { UserProfilePage } from "./UserProfilePage";

const MatchedUserDispatch = ( {match} ) => {
  let element = (
    <Switch>
      <Route path={ match.path } component={ BrowseUsersPage } exact/>
      <Route path={ `${ match.path }/:id` } component={ UserProfilePage } />
    </Switch>
  );
  return element;
};

export {MatchedUserDispatch};
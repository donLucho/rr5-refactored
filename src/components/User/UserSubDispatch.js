import React from "react";
import { Switch, Route } from "react-router-dom";

import { UserSettings } from "./UserSettings";
import { UserComments } from "./UserComments";

const UserSubDispatch = ( {match} ) => {

  // console.log( "UserSubDispatch.JS >>> match: ", match );

  let element = (
    <Switch>      
      <Route path={ `${ match.path }/settings` } component={ UserSettings } />      
      <Route path={ `${ match.path }/comments` } component={ UserComments } />
    </Switch>
  );
  return element;
  
};



export { UserSubDispatch };
import React from 'react';
import { Switch, Route } from "react-router-dom";

import { BrowseProductsPage } from "../BrowseProducts/BrowseProductsPage";
import { ProductProfilePage } from "./ProductProfilePage";

const MatchedProductDispatch = ( { props } ) => {
  let element = (
    <Switch>
      <Route path={ props.match.path } component={ BrowseProductsPage } />
      <Route path={ `${ props.match.path }/:id` } component={ ProductProfilePage } />
    </Switch>
  );
  return element;
};

export {MatchedProductDispatch};
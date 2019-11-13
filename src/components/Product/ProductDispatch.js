import React from 'react';
import { Switch, Route } from "react-router-dom";

import { BrowseProductsPage } from "../BrowseProducts/BrowseProductsPage";
import { ProductProfilePage } from "./ProductProfilePage";

const ProductDispatch = () => {
  let element = (
    <Switch>
      <Route path="products" component={ BrowseProductsPage } exact />
      <Route path="products/:id" component={ ProductProfilePage } />
    </Switch>
  );
  return element;
};

export {ProductDispatch};
import React from 'react';

import { Alpha } from './layout/alpha';

import { myRoutes as routes } from './models/Routes';

const App = () => {
  let element = (
    <>
      <Alpha routes={routes} />
    </>
  );
  return element;
}

export { App };

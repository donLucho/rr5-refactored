import { HomePage } from '../components/Home/HomePage';
import { AboutPage } from '../components/About/AboutPage';

import { UserSettings } from '../components/User/UserSettings';
import { UserComments } from '../components/User/UserComments'; 
import { UserProfilePage} from '../components/User/UserProfilePage'; 
import { BrowseUsersPage } from '../components/BrowseUsers/BrowseUsersPage';
/*  */
// import { UserSubLayout } from '../components/User/UserSubLayout';
// import { MatchedUserSubLayout } from '../components/User/MatchedUserSubLayout'; 
/*  */


import { ProductProfilePage } from '../components/Product/ProductProfilePage';
import { BrowseProductsPage } from '../components/BrowseProducts/BrowseProductsPage';
/*  */
// import { ProductSubLayout } from '../components/Product/ProductSubLayout'; 
// import { MatchedProductSubLayout } from '../components/Product/MatchedProductSubLayout'; 
/*  */

const myRoutes = [
  { path: '/', name: 'Home', Component: HomePage, navmatch: true, showInNav: true }
  , { path: '/about', name: 'About', Component: AboutPage, navmatch: false, showInNav: true }
  
  , { path: '/users/:id/settings', name: 'User Settings', Component: UserSettings, navmatch: false, showInNav: false }
  , { path: '/users/:id/comments', name: 'User Comments', Component: UserComments, navmatch: false, showInNav: false }
  , { path: '/users/:id', name: 'User', Component: UserProfilePage, navmatch: false, showInNav: false }

  , { path: '/users', name: 'Users', Component: BrowseUsersPage, navmatch: false, showInNav: true }
  /*  */
  // , { path: '/userstoo', name: 'U2', Component: UserSubLayout, navmatch: false, showInNav: true }
  // , { path: '/usersthree', name: 'U3', Component: MatchedUserSubLayout, navmatch: false, showInNav: true }
  /*  */

  , { path: '/products/:id', name: 'Product', Component: ProductProfilePage, navmatch: false, showInNav: false }

  , { path: '/products', name: 'Products', Component: BrowseProductsPage, navmatch: false, showInNav: true }
  /*  */
  // , { path: '/productstoo', name: 'P2', Component: ProductSubLayout, navmatch: false, showInNav: true }
  // , { path: '/productsthree', name: 'P3', Component: MatchedProductSubLayout, navmatch: false, showInNav: true }
  /*  */
];

export { myRoutes };
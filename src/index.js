import React from 'react';
import ReactDOM from 'react-dom';

// NEW - CSS WORKS
import "./css/facss.css"; 

// NEW 
import "./sass/boots.scss";
import "./js/vendors.js";

// NEW
import "./sass/customstyles.scss"

import {App} from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

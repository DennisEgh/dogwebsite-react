import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCartShopping, faCircleUser, faAngleDown, faMagnifyingGlass, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping, faCircleUser, faAngleDown, faMagnifyingGlass, faCircleXmark)
 





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


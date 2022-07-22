import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCartShopping, faCircleUser, faAngleDown, faMagnifyingGlass, faCircleXmark, faXmark} from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping, faCircleUser, faAngleDown, faMagnifyingGlass, faCircleXmark, faXmark)
 





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';


const mainEl = document.querySelector('main');
const root = ReactDOM.createRoot(mainEl);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

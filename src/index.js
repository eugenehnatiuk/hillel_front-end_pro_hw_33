import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

const mainEl = document.getElementById('root');
const container = ReactDOM.createRoot(mainEl);

if (!root) {
  throw new Error('root not found');
}

container.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

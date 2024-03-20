import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';


const mainEl = document.getElementById('root');
const container = ReactDOM.createRoot(mainEl);

if (!mainEl) {
  throw new Error('root not found');
}

container.render(<App />);

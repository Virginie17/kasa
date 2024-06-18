import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//creation du root qui servira au rendu de l application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



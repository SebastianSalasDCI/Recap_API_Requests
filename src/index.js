import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/main.scss';

//Use dotenv file
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


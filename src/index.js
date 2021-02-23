import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './Navigation';

ReactDOM.render(
  <React.StrictMode>
    <Navigation>
      <App />
    </Navigation>
  </React.StrictMode>,
  document.getElementById('root')
);

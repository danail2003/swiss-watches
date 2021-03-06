import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './Navigation';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

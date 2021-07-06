import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/missowebapp">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

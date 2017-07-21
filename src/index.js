import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css';
import App from './containers/app/App';
import Store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store} >
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
    registerServiceWorker();
  
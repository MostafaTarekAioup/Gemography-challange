import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux'
import {Provider} from 'react-redux'
import {AppProvider} from './context/context'
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

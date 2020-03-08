import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import cartReducer from './reducers/cartReducer';
import Login from './components/Login';

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <Login />  
  </Provider>,
  document.getElementById('root')
);
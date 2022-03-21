import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { auth } from "./redux/actions";

const ISSERVER = typeof window === "undefined";

if (!ISSERVER) {
  let access_token = localStorage.getItem('access_token');
  let refresh_token = localStorage.getItem('refresh_token');

  if (access_token) {
    store.dispatch(auth.loginUserSuccess({ access_token, refresh_token }))
  }
}


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

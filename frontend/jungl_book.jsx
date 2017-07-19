import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUTIL from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  let store

  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    console.log("PRE", preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  // TESTING START
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.login = APIUTIL.login
  window.signup = APIUTIL.signup
  window.logout = APIUTIL.logout
  window.deleteAccount = APIUTIL.deleteAccount
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});

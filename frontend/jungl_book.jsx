import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUTIL from './util/session_api_util'
import * as BIOAPIUTIL from './util/bios_api_util'
import * as FRIENDAPIUTIL from './util/friend_requests_api_util'
import { fetchUserBio, updateUserBio } from './actions/bios_actions'
import { fetchUserRequests } from './actions/friend_requests_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store

  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
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
  window.fetchUserBio = fetchUserBio
  window.updateUserBio = updateUserBio
  window.fetchUserRequests = fetchUserRequests
  window.sendUserRequest = FRIENDAPIUTIL.sendUserRequest
  window.acceptUserRequest = FRIENDAPIUTIL.acceptUserRequest
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});

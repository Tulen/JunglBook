import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUTIL from './util/session_api_util'
import * as BIOAPIUTIL from './util/bios_api_util'
import * as FRIENDAPIUTIL from './util/friend_requests_api_util'
import * as POSTAPIUTIL from './util/posts_api_util'
import * as COMMENTAPIUTIL from './util/comments_api_util'
import * as PHOTOAPIUTIL from './util/photos_api_util'
import * as PROFILEPHOTOAPIUTIL from './util/profile_photos_api_util'
import { fetchUserBio, updateUserBio } from './actions/bios_actions'
import { fetchUserRequests, removeUserRequest, sendUserRequest } from './actions/friend_requests_actions'
import { createUserPost, fetchUserPosts, deleteUserPost, editUserPost } from './actions/posts_actions'
import { createComment, fetchPostComments, editComment, deleteComment } from './actions/comments_actions'
import { uploadPhoto, fetchUserPhotos, changeProfilePic, deletePhoto } from './actions/photos_actions'
import { fetchProfilePic } from './actions/profile_photos_actions'

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
  window.sendUserRequest = sendUserRequest
  window.acceptUserRequest = FRIENDAPIUTIL.acceptUserRequest
  window.removeUserRequest = removeUserRequest
  window.createUserPost = createUserPost
  window.fetchUserPosts = fetchUserPosts
  window.deleteUserPost = deleteUserPost
  window.editUserPost = editUserPost
  window.createComment = createComment
  window.fetchPostComments = fetchPostComments
  window.editComment = editComment
  window.deleteComment = deleteComment
  window.fetchUserPhotos = fetchUserPhotos
  window.fetchProfilePic = fetchProfilePic
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});

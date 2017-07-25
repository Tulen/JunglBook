import * as APIUtil from '../util/posts_api_util'

export const RECEIVE_USER_POST = "RECEIVE_USER_POST";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST_ID = "RECEIVE_POST_ID";

export const createUserPost= post => dispatch => (
  APIUtil.createUserPost(post).then(
      post => ( dispatch(receiveUserPost(post))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const deleteUserPost= post => dispatch => (
  APIUtil.deleteUserPost(post).then(
      post => ( dispatch(receivePostId(post))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const fetchUserPosts= id => dispatch => (
  APIUtil.fetchUserPosts(id).then(
      posts => ( dispatch(receiveUserPosts(posts))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const receiveUserPost = post => ({
  type: RECEIVE_USER_POST,
  post
})

export const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  posts
})

export const receivePostId = id => ({
  type: RECEIVE_POST_ID,
  id
})

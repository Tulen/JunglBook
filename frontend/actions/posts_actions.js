import * as APIUtil from '../util/posts_api_util'

export const RECEIVE_USER_POST = "RECEIVE_USER_POST";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";

export const createUserPost= post => dispatch => (
  APIUtil.createUserPost(post).then(
      post => ( dispatch(receiveUserPost(post))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const fetchUserPosts= id => dispatch => (
  APIUtil.fetchUserPosts(id).then(
      post => ( dispatch(receiveUserPosts(posts))),
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

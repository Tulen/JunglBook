import * as APIUtil from '../util/friend_requests_api_util';

export const RECEIVE_USER_REQUESTS = "RECEIVE_USER_REQUESTS";
export const RECEIVE_USER_REQUEST = "RECEIVE_USER_REQUEST";
export const ACCEPT_USER_REQUEST = "ACCEPT_USER_REQUEST";
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";

export const fetchUserRequests = id => dispatch => (
  APIUtil.fetchUserRequests(id).then(
      reqs => ( dispatch(receiveUserRequests(reqs))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)


export const sendUserRequest = req => dispatch => (
  APIUtil.sendUserRequest(req).then(
    req => ( dispatch(receiveUserRequest(req))),
    error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const acceptUserRequest = (id, req) => dispatch => (
  APIUtil.acceptUserRequest(id, req).then(
    req => (dispatch(acceptRequest(req))),
    error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const removeUserRequest = (id, req) => dispatch => (
  APIUtil.removeUserRequest(id, req).then(
    req => (dispatch(deleteRequest(req))),
    error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const receiveUserRequests = reqs => ({
  type: RECEIVE_USER_REQUESTS,
  reqs
})

export const receiveUserRequest = req => ({
  type: RECEIVE_USER_REQUEST,
  req
})

export const acceptRequest = req => ({
  type: ACCEPT_USER_REQUEST,
  req
})

export const deleteRequest = req => ({
  type: DELETE_USER_REQUEST,
  req
})

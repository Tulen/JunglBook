import * as APIUtil from '../util/friend_requests_api_util';

export const RECEIVE_USER_REQUESTS = "RECEIVE_USER_REQUESTS";
export const RECEIVE_USER_REQUEST = "RECEIVE_USER_REQUEST";
export const ACCEPT_USER_REQUEST = "ACCEPT_USER_REQUEST";
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";


export const fetchUserRequests = () => dispatch => (
  APIUtil.fetchUserRequests().then(
    reqs => ( dispatch(receiveUserRequests(reqs)))
  )
)


export const sendUserRequest = req => dispatch => (
  APIUtil.sendUserRequest(req).then(
    req => ( dispatch(receiveUserRequest(req)))
  )
)

export const acceptUserRequest = (id, req) => dispatch => (
  APIUtil.acceptUserRequest(id, req).then(
    req => (dispatch(acceptRequest(req)))
  )
)

export const removeUserRequest = (id, req) => dispatch => (
  APIUtil.removeUserRequest(id, req).then(
    req => (dispatch(deleteRequest(req)))
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

import * as APIUtil from '../util/friend_requests_api_util';

export const RECEIVE_USER_REQUESTS = "RECEIVE_USER_REQUESTS";

export const fetchUserRequests = id => dispatch => (
  APIUtil.fetchUserRequests(id).then(
      reqs => ( dispatch(receiveUserRequests(reqs))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const receiveUserRequests = reqs => ({
  type: RECEIVE_USER_REQUESTS,
  reqs
})

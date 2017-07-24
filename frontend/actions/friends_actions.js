import * as APIUtil from '../util/friends_api_util';

export const RECEIVE_USER_FRIENDS = "RECEIVE_USER_FRIENDS";
export const RECEIVE_FRIEND_ERRORS = "RECEIEVE_FRIEND_ERRORS";

export const fetchUserFriends= id => dispatch => (
  APIUtil.fetchUserFriends(id).then(
      friends => ( dispatch(receiveUserRequests(friends))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const receiveUserRequests = friends => ({
  type: RECEIVE_USER_FRIENDS,
  friends
})

export const receiveErrors = err => ({
  type: RECEIVE_FRIEND_ERRORS,
  err
})

import { RECEIVE_USER_FRIENDS, RECEIVE_FRIEND_ERRORS } from '../actions/friends_actions'
import { ACCEPT_USER_REQUEST, DELETE_USER_REQUEST } from '../actions/friend_requests_actions'
import merge from 'lodash/merge'

const defaultState = {
  friends: {}
}

const FriendsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_USER_FRIENDS:
      return action.friends
    case RECEIVE_FRIEND_ERRORS:
      return defaultState
    case ACCEPT_USER_REQUEST:
      newState[action.req.id] = action.req
      return newState
    case DELETE_USER_REQUEST:
      delete newState[action.req.id]
      return newState
    default:
      return state

  }
}

export default FriendsReducer

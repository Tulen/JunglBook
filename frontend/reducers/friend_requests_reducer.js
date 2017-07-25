import { RECEIVE_USER_REQUESTS, RECEIVE_USER_REQUEST,ACCEPT_USER_REQUEST, DELETE_USER_REQUEST } from '../actions/friend_requests_actions'
import merge from 'lodash/merge'

const defaultState = {
}

const FriendRequestsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USER_REQUESTS:
      return Object.assign({}, state, action.reqs)
    case RECEIVE_USER_REQUEST:
      newState[action.req.id] = action.req
      return newState
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

export default FriendRequestsReducer

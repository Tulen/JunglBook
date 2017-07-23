import { RECEIVE_USER_REQUESTS, ACCEPT_USER_REQUEST, DELETE_USER_REQUEST } from '../actions/friend_requests_actions'
import merge from 'lodash/merge'

const defaultState = {

}

const FriendRequestsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  console.log(action);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_USER_REQUESTS:
      return merge({}, state, action.reqs)
    case ACCEPT_USER_REQUEST:
      return merge({}, state, action.req)
    case DELETE_USER_REQUEST:
      console.log("OLDNEWSTATE", newState)
      delete newState[action.req.id]
      console.log("NEWNEWSTATE", newState)
      return newState
    default:
      return state

  }
}

export default FriendRequestsReducer

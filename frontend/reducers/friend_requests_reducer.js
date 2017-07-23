import { RECEIVE_USER_REQUESTS } from '../actions/friend_requests_actions'
import merge from 'lodash/merge'

const defaultState = {
  
}

const FriendRequestsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_REQUESTS:
      return merge({}, state, action.reqs)

    default:
      return state

  }
}

export default FriendRequestsReducer

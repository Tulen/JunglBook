import { RECEIVE_USER_FRIENDS, RECEIVE_FRIEND_ERRORS } from '../actions/friends_actions'
import merge from 'lodash/merge'

const defaultState = {
  friends: {}
}

const FriendsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  console.log("FRIENDSREDUCER", action);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_USER_FRIENDS:
      return action.friends
    case RECEIVE_FRIEND_ERRORS:
      return defaultState
    default:
      return state

  }
}

export default FriendsReducer

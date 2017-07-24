import { RECEIVE_USER_FRIENDS } from '../actions/friends_actions'
import merge from 'lodash/merge'

const defaultState = {

}

const FriendsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  console.log("FRIENDSREDUCER", action);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_USER_FRIENDS:
      return action.friends

    default:
      return state

  }
}

export default FriendsReducer

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'
import merge from 'lodash/merge'

const defaultState = {
  currentUser: null,
  errors: []
}

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  console.log("ERRORS",action.errors);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser})
    case RECEIVE_ERRORS:
      if (action.errors.length === 0) {
        console.log("ZERO!")
        return merge({}, state, {errors: []})
      }
      if (action.errors.length <= 1) {
        console.log("ERRORS",action.errors);
        return merge({}, state, {errors: action.errors})
      } else {
          return state
      }

    default:
      return state

  }
}

export default SessionReducer

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'
import merge from 'lodash/merge'

const defaultState = {
  current_user: null,
  errors: []
}

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {current_user: action.currentUser})
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors})
    default:
      return state

  }
}

export default SessionReducer

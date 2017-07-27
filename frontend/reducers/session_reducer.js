import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'
import { RECEIVE_USER_PROF_PHOTO } from '../actions/bios_actions'
import merge from 'lodash/merge'

const defaultState = {
  currentUser: null,
  errors: []
}

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  console.log("BIBOIBOBIOBIBOI", action)
  switch (action.type) {
    case RECEIVE_USER_PROF_PHOTO:
      if (action.bio.profile_url) {
        return merge({}, state, {currentUser: {profile_url: action.bio.profile_url}});
      } else if (action.bio.cover_url) {
        return merge({}, state, {currentUser: {cover_url: action.bio.cover_url}});
      } else {
        return state
      }
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser})
    case RECEIVE_ERRORS:
      if (action.errors.length === 0) {
        return merge({}, {currentuser: state.currentUser}, {errors: []})
      }
      if (action.errors.length <= 1) {
        return merge({}, state, {errors: action.errors})
      } else {
          return state
      }

    default:
      return state

  }
}

export default SessionReducer

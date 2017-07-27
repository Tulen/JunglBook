import { RECEIVE_USER_PROFILE, RECEIVE_USER_COVER} from '../actions/profile_photos_actions'
import merge from 'lodash/merge'

const defaultState = {
  profile: {},
  cover: {}
}

const ProfilePhotosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      newState['profile'] = action.photo
      return newState
    case RECEIVE_USER_COVER:
      newState['cover'] = action.photo
      return newState
    default:
      return state

  }
}

export default ProfilePhotosReducer

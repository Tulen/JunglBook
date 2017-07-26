import { RECEIVE_USER_PHOTO, RECEIVE_USER_PHOTOS, RECEIVE_PHOTO_ID } from '../actions/photos_actions'
import merge from 'lodash/merge'

const defaultState = {

}

const PhotosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USER_PHOTO:
      newState[`${action.photo.id}`] = action.photo
      return newState
    case RECEIVE_USER_PHOTOS:
      return action.photos
    case RECEIVE_PHOTO_ID:
      delete newState[`${action.id.id}`]
      return newState
    default:
      return state

  }
}

export default PhotosReducer

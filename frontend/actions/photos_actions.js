import * as APIUtil from '../util/photos_api_util'

export const RECEIVE_USER_PHOTO = "RECEIVE_USER_PHOTO";
export const RECEIVE_USER_PHOTOS = "RECEIVE_USER_PHOTOS";
export const RECEIVE_PHOTO_ID = "RECEIVE_PHOTO_ID";

export const uploadPhoto = photo => dispatch => (
  APIUtil.uploadPhoto(photo).then(
      photo => ( dispatch(receiveUserPhoto(photo))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const deletePhoto = photo => dispatch => (
  APIUtil.deletePhoto(photo).then(
      photo => ( dispatch(receivePhotoId(photo))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const fetchUserPhotos = id => dispatch => (
  APIUtil.fetchUserPhotos(id).then(
      photos => ( dispatch(receiveUserPhotos(photos))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const receiveUserPhoto = photo => ({
  type: RECEIVE_USER_PHOTO,
  photo
})

export const receiveUserPhotos = photos => ({
  type: RECEIVE_USER_PHOTOS,
  photos
})

export const receivePhotoId = id => ({
  type: RECEIVE_PHOTO_ID,
  id
})

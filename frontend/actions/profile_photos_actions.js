import * as APIUtil from '../util/profile_photos_api_util'

export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";
export const RECEIVE_USER_COVER = "RECEIVE_USER_COVER";



export const fetchProfilePic = id => dispatch => (
  APIUtil.fetchProfilePic(id).then(
      photo => ( dispatch(receiveUserProfile(photo))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const updateProfilePic = (id, photo) => dispatch => (
  APIUtil.changeProfilePic(id, photo).then(
      photo => ( dispatch(receiveUserProfile(photo))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const fetchCoverPic = id => dispatch => (
  APIUtil.fetchCoverPic(id).then(
      photo => ( dispatch(receiveUserCover(photo))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const updateCoverPic = (id, photo) => dispatch => (
  APIUtil.changeCoverPic(id, photo).then(
      photo => ( dispatch(receiveUserCover(photo))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const receiveUserProfile = photo => ({
  type: RECEIVE_USER_PROFILE,
  photo
})

export const receiveUserCover = photo => ({
  type: RECEIVE_USER_COVER,
  photo
})

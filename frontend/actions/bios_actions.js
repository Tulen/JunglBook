import * as APIUtil from '../util/bios_api_util';

export const RECEIVE_USER_BIO = "RECEIVE_USER_BIO";
export const RECEIVE_USER_PROF_PHOTO = "RECEIVE_USER_PROF_PHOTO";

export const fetchUserBio = id => dispatch => (
  APIUtil.fetchUserBio(id).then(
      bio => ( dispatch(receiveUserBio(bio))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const updateUserBio = (id, bios) => dispatch => (
  APIUtil.updateUserBio(id, bios).then(
    bio => ( dispatch(receiveUserBio(bio))),
    error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const updateUserPhoto = (id, bios) => dispatch => (
  APIUtil.updateUserBio(id, bios).then(
    bio => ( dispatch(receiveUserProfPhoto(bio))),
    error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const receiveUserBio = bio => ({
  type: RECEIVE_USER_BIO,
  bio
})

export const receiveUserProfPhoto = bio => ({
  type: RECEIVE_USER_PROF_PHOTO,
  bio
})

import { RECEIVE_USER_BIO, RECEIVE_USER_PROF_PHOTO } from '../actions/bios_actions'
import merge from 'lodash/merge';

let defaultState = {
  id: '',
  fname:'',
  lname: '',
  birthday: '',
  sex: '',
  work: '',
  education: '',
  current_city: '',
  hometown: '',
  relationship: '',
  nickname: '',
  favorite_quote: '',
  profile_url: '',
  cover_url: ''
}

const BiosReducer = (state = defaultState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USER_PROF_PHOTO:
      return merge({}, state, {profile_url: action.bio.profile_url})
    case RECEIVE_USER_BIO:
      return Object.assign({}, state, action.bio);

    default:
      return state;
  }
}

export default BiosReducer;

import { RECEIVE_USER_BIO } from '../actions/bios_actions'
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
    case RECEIVE_USER_BIO:
      return Object.assign({}, state, action.bio);

    default:
      return state;
  }
}

export default BiosReducer;

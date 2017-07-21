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
  favorite_quote: ''
}

const BiosReducer = (state = defaultState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USER_BIO:
      return merge({}, state, action.bio);
    default:
      return state;
  }
}

export default BiosReducer;

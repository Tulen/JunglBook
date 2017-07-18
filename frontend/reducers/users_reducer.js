import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'
import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    default:
      return state;
  }
}

export default UsersReducer;

import { RECEIVE_COMMENT, RECEIVE_POST_COMMENTS, RECEIVE_COMMENT_ID } from '../actions/comments_actions'
import merge from 'lodash/merge'

const defaultState = {

}

const CommentsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[`${action.comment.id}`] = action.comment
      return newState
    case RECEIVE_POST_COMMENTS:
      return merge(newState, action.comments)
    case RECEIVE_COMMENT_ID:
      delete newState[`${action.id.id}`]
      return newState
    default:
      return state

  }
}

export default CommentsReducer

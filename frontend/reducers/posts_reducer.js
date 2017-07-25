import { RECEIVE_USER_POST, RECEIVE_USER_POSTS, RECEIVE_POST_ID } from '../actions/posts_actions'
import merge from 'lodash/merge'

const defaultState = {

}

const PostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  console.log("POSTREDUCER", action)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USER_POST:
      newState[`${action.post.id}`] = action.post
      return newState
    case RECEIVE_USER_POSTS:
      return action.posts
    case RECEIVE_POST_ID:
      delete newState[`${action.id.id}`]
      return newState
    default:
      return state

  }
}

export default PostsReducer

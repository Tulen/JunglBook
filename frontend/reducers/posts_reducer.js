import { RECEIVE_USER_POST, RECEIVE_USER_POSTS } from '../actions/posts_actions'
import merge from 'lodash/merge'

const defaultState = {

}

const PostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USER_POST:
      newState[`${action.post.id}`] = action.post
      return newState
    case RECEIVE_USER_POSTS:
      return action.posts
    default:
      return state

  }
}

export default PostsReducer

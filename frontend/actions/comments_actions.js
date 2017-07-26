import * as APIUtil from '../util/comments_api_util'

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";
export const RECEIVE_COMMENT_ID = "RECEIVE_COMMENT_ID";


export const createComment= comment => dispatch => (
  APIUtil.createComment(comment).then(
      comment => ( dispatch(receiveComment(comment))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const deleteComment= comment => dispatch => (
  APIUtil.deleteComment(comment).then(
      comment => ( dispatch(receiveCommentId(comment))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const editComment= (id, comment) => dispatch => (
  APIUtil.editComment(id, comment).then(
      comment => ( dispatch(receiveComment(comment))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const fetchPostComments= id => dispatch => (
  APIUtil.fetchPostComments(id).then(
      comments => ( dispatch(receivePostComments(comments))),
      error => ( dispatch(receiveErrors(error.responseJSON)))
  )
)

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const receivePostComments = comments => ({
  type: RECEIVE_POST_COMMENTS,
  comments
})

export const receiveCommentId = id => ({
  type: RECEIVE_COMMENT_ID,
  id
})

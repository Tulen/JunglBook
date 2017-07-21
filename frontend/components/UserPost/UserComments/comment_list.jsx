import React from 'react'
import CommentForm from './comment_form'
import CommentListItem from './comment_list_item'

class CommentList extends React.Component {
  render() {
    return (
      <div className="comment-list-container">
        <CommentListItem />
        <CommentForm />
      </div>
    )
  }
}

export default CommentList

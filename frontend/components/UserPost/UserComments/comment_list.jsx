import React from 'react'
import CommentForm from './comment_form'
import CommentListItem from './comment_list_item'
import values from 'lodash/values'

class CommentList extends React.Component {
  componentDidMount() {
    this.props.fetchPostComments(this.props.postId )
  }

  render() {
    let postComments = values(this.props.comments).reverse()
    .map(comment => {
      return <CommentListItem comment={comment} postId={this.props.postId} />
    })

    return (
      <div className="comment-list-container">
        { postComments }
        <CommentForm />
      </div>
    )
  }
}

export default CommentList

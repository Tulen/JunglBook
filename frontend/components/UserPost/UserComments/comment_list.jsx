import React from 'react'
import CommentFormContainer from './comment_form_container'
import CommentListItem from './comment_list_item'
import values from 'lodash/values'

class CommentList extends React.Component {
  componentDidMount() {
    this.props.fetchPostComments(this.props.postId )
  }

  render() {
    let postComments = values(this.props.comments).reverse()
    .map(comment => {
      return <CommentListItem userId={this.props.session.currentUser.id} comment={comment} postId={this.props.postId} />
    })

    return (
      <div className="comment-list-container">
        { postComments }
        <CommentFormContainer postId={this.props.postId} />
      </div>
    )
  }
}

export default CommentList

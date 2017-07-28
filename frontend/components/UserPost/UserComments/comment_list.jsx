import React from 'react'
import CommentFormContainer from './comment_form_container'
import CommentListItem from './comment_list_item'
import values from 'lodash/values'

class CommentList extends React.Component {
  componentDidMount() {
    if (this.props.nested != true) {
      this.props.fetchPostComments(this.props.postId )
    }
  }

  render() {
    let postComments = values(this.props.comments).filter((comment) => {
      if (this.props.nested) {
        return comment.parent_id === this.props.parentCommentId
      } else {
        return comment.parent_id == null
      }

    })
    .map(comment => {
      return <CommentListItem nested={this.props.nested} userId={this.props.session.currentUser.id} comment={comment} postId={this.props.postId} />
    })
    if (this.props.nested && this.props.hidden) {
      return <div> </div>
    } else {
      return (
        <div className={`comment-list-container nested-${this.props.nested}`}>
          { postComments }
          <CommentFormContainer focused={this.props.focused}  parentCommentId={this.props.parentCommentId} nested={this.props.nested} inputRef={this.props.inputRef} postId={this.props.postId} />
        </div>
      )
    }


  }
}

export default CommentList

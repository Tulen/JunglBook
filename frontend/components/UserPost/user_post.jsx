import React from 'react'
import UserPostBodyContainer from './user_post_body_container'
import CommentListContainer from './UserComments/comment_list_container'

class UserPost extends React.Component {
  render() {
    return (
      <div className="user-post">
        <UserPostBodyContainer post={this.props.post} profId={this.props.profId} />
        <div className="user-post-actions">
          <span>
            <i className="fa fa-thumbs-up"> </i>
            <p> Like </p>
          </span>
          <span>
            <i className="fa fa-comment"> </i>
            <p> Comment </p>
          </span>
          <span>
            <i className="fa fa-share"> </i>
            <p> Share </p>
          </span>
        </div>
        <CommentListContainer postId={this.props.post.id}/>
      </div>
    )
  }
}

export default UserPost

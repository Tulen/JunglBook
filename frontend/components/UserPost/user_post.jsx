import React from 'react'
import UserPostBody from './user_post_body'
import CommentList from './UserComments/comment_list'

class UserPost extends React.Component {
  render() {
    return (
      <div className="user-post">
        <UserPostBody />
        <div className="user-post-actions">
          <p> Like </p>
          <p> Comment </p>
          <p> Share </p>
        </div>
        <CommentList />
      </div>
    )
  }
}

export default UserPost

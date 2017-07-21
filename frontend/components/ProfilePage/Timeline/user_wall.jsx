import React from 'react'
import UserPost from '../../UserPost/user_post'

class UserWall extends React.Component {
  render() {
    return (
      <div className="post-feed" id="user-wall">
        <UserPost />
        <UserPost />
        <UserPost />
      </div>
    )
  }
}

export default UserWall

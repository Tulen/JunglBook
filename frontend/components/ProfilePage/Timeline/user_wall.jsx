import React from 'react'
import UserPost from '../../UserPost/user_post'
import values from 'lodash/values'

class UserWall extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.profId)
  }
  render() {
    let userPosts = values(this.props.posts).map(post => {
      return <UserPost post={post} profId={this.props.profId} />
    })

    return (
      <div className="post-feed" id="user-wall">
        {userPosts}
      </div>
    )
  }
}

export default UserWall

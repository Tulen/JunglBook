import React from 'react'
import UserPost from '../../UserPost/user_post'
import values from 'lodash/values'

class UserWall extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.bios.id )
  }

  componentWillReceiveProps(nextProps) {
    console.log("WILLRECEIEVE", this.props, nextProps)
    if (this.props.bios.id != nextProps.bios.id) {
      this.props.fetchUserPosts(nextProps.bios.id)
    }
  }
  render() {
    let userPosts = values(this.props.posts).reverse()
    .filter((post) => {
      return post.wall_id == this.props.bios.id
    })
    .map(post => {
      return <UserPost post={post} profId={this.props.bios.id} />
    })

    return (
      <div className="post-feed" id="user-wall">
        {userPosts}
      </div>
    )
  }
}

export default UserWall

import React from 'react'
import UserPost from '../UserPost/user_post'
import values from 'lodash/values'

class NewsFeedList extends React.Component {

  componentDidMount() {
    this.props.fetchUserBio(this.props.session.currentUser.id)
    this.props.fetchUserPosts(this.props.session.currentUser.id )
  }

  render() {
    let userPosts = values(this.props.posts).reverse()
    .map(post => {
      return <UserPost key={post.id} post={post} profId={this.props.session.currentUser.id} />
    })

    return (
      <div className="post-feed" id="user-wall">
        {userPosts}
      </div>
    )
  }
}

export default NewsFeedList

import React from 'react'
import UserPost from '../UserPost/user_post'

class NewsFeedList extends React.Component {
  render() {
    return (
      <div className="post-feed" id="news-feed-list">
        <UserPost/>
        <UserPost/>
        <UserPost/>
        <UserPost/>
        <UserPost/>
      </div>
    )
  }
}

export default NewsFeedList

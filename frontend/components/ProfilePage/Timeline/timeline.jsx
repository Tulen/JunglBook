import React from 'react'
import IntroWidget from './intro_widget'
import PhotoWidget from './photo_widget'
import FriendWidget from './friend_widget'
import UserWall from './user_wall'
import PostCreate from '../../PostCreate/post_create'

class Timeline extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div id="feed-body">
        <div id="feed-left">
         <IntroWidget />
         <PhotoWidget />
         <FriendWidget />
        </div>
        <div id="feed-right">
         <PostCreate />
         <UserWall />
        </div>
      </div>

    )
  }
}

export default Timeline

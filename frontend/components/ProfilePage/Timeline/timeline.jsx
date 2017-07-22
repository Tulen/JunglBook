import React from 'react'
import IntroWidget from './intro_widget'
import PhotoWidget from './photo_widget'
import FriendWidget from './friend_widget'
import UserWall from './user_wall'
import PostCreate from '../../PostCreate/post_create'

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    let idReg = /\d+/g;
    let currentProfId = this.props.location.pathname.match( idReg )[0];
    this.state = {
      currentProfId: currentProfId
    };
  }

  render() {
    return (
      <div id="feed-body">
        <div id="feed-left">
         <IntroWidget profId={this.state.currentProfId} bios={this.props.bios}/>
         <PhotoWidget profId={this.state.currentProfId} />
         <FriendWidget profId={this.state.currentProfId} />
        </div>
        <div id="feed-right">
         <PostCreate />
         <UserWall profId={this.state.currentProfId} />
        </div>
      </div>

    )
  }
}

export default Timeline

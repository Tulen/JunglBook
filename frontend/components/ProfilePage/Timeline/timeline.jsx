import React from 'react'
import IntroWidget from './intro_widget'
import PhotoWidgetContainer from './photo_widget_container'
import FriendWidgetContainer from './friend_widget_container'
import UserWallContainer from './user_wall_container'
import PostCreateContainer from '../../PostCreate/post_create_container'

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
         <IntroWidget currentId={this.props.session.currentUser.id} profId={this.state.currentProfId} bios={this.props.bios}/>
         <PhotoWidgetContainer profId={this.state.currentProfId} />
         <FriendWidgetContainer profId={this.state.currentProfId} />
        </div>
        <div id="feed-right">
         <PostCreateContainer />
         <UserWallContainer profId={this.state.currentProfId} />
        </div>
      </div>

    )
  }
}

export default Timeline

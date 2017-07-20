import React from 'react'
import NavBarContainer from '../nav_bar_container'
import ProfileHeader from './profile_header'
import IntroWidget from './intro_widget'
import PhotoWidget from './photo_widget'
import FriendWidget from './friend_widget'
import UserWall from './user_wall'
import PostCreate from '../post_create'

class ProfilePage extends React.Component {
  render() {
     return(
       <div id="profile-feed">
         <NavBarContainer />
         <ProfileHeader />
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
       </div>

    )
  }
}

export default ProfilePage

//coverphoto height: 205px 851w
//headline height: 34px 851w
//profile pic 168x168

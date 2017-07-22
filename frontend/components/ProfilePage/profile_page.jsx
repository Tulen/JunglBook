import React from 'react'
import NavBarContainer from '../nav_bar_container'
import ProfileHeader from './profile_header'
import TimelineContainer from './Timeline/timeline_container'
import About from './About/about'
import Friends from './Friends/friends'
import Photos from './Photos/photos'
import { Switch, Route } from 'react-router-dom'


class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserBio(this.props.session.currentUser.id)
  }

  render() {
     return(
       <div>
         <NavBarContainer />
         <div id="profile-feed">
           <ProfileHeader />
           <Switch>
             <Route path="/user/about" component={About}></Route>
             <Route path="/user/friends" component={Friends}></Route>
             <Route path="/user/photos" component={Photos}></Route>
             <Route path="/user" component={TimelineContainer}></Route>
           </Switch>

         </div>

       </div>

    )
  }
}

export default ProfilePage

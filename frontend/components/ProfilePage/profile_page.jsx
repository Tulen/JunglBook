import React from 'react'
import NavBarContainer from '../nav_bar_container'
import ProfileHeaderContainer from './profile_header_container'
import TimelineContainer from './Timeline/timeline_container'
import About from './About/about'
import Friends from './Friends/friends'
import Photos from './Photos/photos'
import { Switch, Route } from 'react-router-dom'



class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    let idReg = /\d+/g;
    let currentProfId = this.props.location.pathname.match( idReg )[0];
    this.state = {
      currentProfId: currentProfId
    }
  }

  componentDidMount() {
    this.props.fetchUserBio(this.state.currentProfId)
  }

  render() {
     return(
       <div>
         <NavBarContainer />
         <div id="profile-feed">
           <ProfileHeaderContainer pageId={this.state.currentProfId} />
           <Switch>
             <Route path="/user/:userId/about" component={About}> </Route>
             <Route path="/user/:userId/friends" component={Friends}></Route>
             <Route path="/user/:userId/photos" component={Photos}></Route>
             <Route path="/user/:userId" component={TimelineContainer}></Route>
           </Switch>

         </div>

       </div>

    )
  }
}

export default ProfilePage

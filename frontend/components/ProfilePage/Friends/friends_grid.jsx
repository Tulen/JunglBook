import React from 'react'
import FriendsGridItem from './friends_grid_item'
import values from 'lodash/values'
import { Link } from 'react-router-dom'

class FriendsGrid extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let idReg = /\d+/g;
    let currentProfId = this.props.location.pathname.match( idReg )[0];
    this.props.fetchUserFriends(currentProfId)
  }


  render() {
    let friendsListArr = values(this.props.friends)
    let friendsList = friendsListArr.map((friend) => {
      let pathId
      let friendProfile
      if (friend.sender_id === this.props.bios.id) {
        pathId = friend.recipient_id
        friendProfile = friend.recipient_profile
      } else {
        pathId = friend.sender_id
        friendProfile = friend.sender_profile
      }
      if (pathId === undefined) {
        return <h2> </h2>
      }
      return( <li key={`${(Date.now() * friend.sender_id + Date.now() * friend.recipient_id)}`}> <Link to={`/user/${pathId}`}><FriendsGridItem displayId={pathId} friend={friend} friendProfile={friendProfile}/> </Link></li>)
    })

    return (
      <div id="friends-grid">
        <ul>
          {friendsList}
        </ul>
      </div>

    )
  }
}

export default FriendsGrid

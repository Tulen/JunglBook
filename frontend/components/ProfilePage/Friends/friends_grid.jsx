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
      if (friend.sender_id === this.props.bios.id) {
        pathId = friend.recipient_id
      } else {
        pathId = friend.sender_id
      }
      if (pathId === undefined) {
        return <h2> </h2>
      }
      return( <li key={friend.id}> <Link to={`/user/${pathId}`}><FriendsGridItem displayId={pathId} friend={friend}/> </Link></li>)
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

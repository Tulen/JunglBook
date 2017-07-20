import React from 'react'
import FriendsGridItem from './friends_grid_item'

class FriendsGrid extends React.Component {
  render() {
    return (
      <div id="friends-grid">
        <ul>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
          <li> <FriendsGridItem/> </li>
        </ul>
      </div>

    )
  }
}

export default FriendsGrid

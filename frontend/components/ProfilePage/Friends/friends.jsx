import React from 'react'
import FriendsGrid from './friends_grid'

class Friends extends React.Component {
  render() {
    return (
      <div id="friends-container">
        <div className="detail-header-container">
          <div className="detail-header">
            <i className="fa fa-group"> </i>
            <h4> Friends </h4>
          </div>
        </div>
        <FriendsGrid />
      </div>

    )
  }
}

export default Friends

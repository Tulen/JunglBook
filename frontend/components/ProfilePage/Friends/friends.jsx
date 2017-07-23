import React from 'react'
import FriendsGrid from './friends_grid'

class Friends extends React.Component {
  render() {
    return (
      <div id="friends-container">
        <div className="detail-header-container friends-header">
          <div className="detail-header">
            <i className="fa fa-group"> </i>
            <h4> Friends </h4>
          </div>
          <div className="detail-header-buttons">
            <button> Friend Requests </button>
          </div>
        </div>
        <FriendsGrid />
      </div>

    )
  }
}

export default Friends

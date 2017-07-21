import React from 'react'

class FriendWidget extends React.Component {
  render() {
    return (
      <div className="prof-subcomponent"  id="friend-widget">
        <div className="prof-subcomponent-header">
          <div className="prof-subcomponent-icon-container">
            <i className="fa fa-group"></i>
          </div>
          Friends
        </div>
      </div>
    )
  }
}

export default FriendWidget

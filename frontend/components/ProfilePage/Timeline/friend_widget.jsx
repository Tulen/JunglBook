import React from 'react'
import FriendWidgetItem from './friend_widget_item'

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
        <div className="widget-grid">
          <ul>
            <li> <FriendWidgetItem /> </li>
            <li> <FriendWidgetItem /> </li>
            <li> <FriendWidgetItem /> </li>
            <li> <FriendWidgetItem /> </li>
            <li> <FriendWidgetItem /> </li>
            <li> <FriendWidgetItem /> </li>
            <li> <FriendWidgetItem /> </li>
            <li> <FriendWidgetItem /> </li>
            <li> <FriendWidgetItem /> </li>
          </ul>

        </div>
      </div>
    )
  }
}

export default FriendWidget

import React from 'react'
import FriendWidgetItem from './friend_widget_item'
import { Link } from 'react-router-dom'

class FriendWidget extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="prof-subcomponent"  id="friend-widget">
        <div className="prof-subcomponent-header">
          <div className="prof-subcomponent-icon-container">
            <i className="fa fa-group"></i>
          </div>
          <Link to={`/user/${this.props.profId}/friends/`}> Friends </Link>
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

import React from 'react'

class FriendWidgetItem extends React.Component {
  render() {
    return (

      <div className="widget-item-container">
        <img src={`${this.props.friendProfile}`} />
      </div>

    )
  }
}

export default FriendWidgetItem

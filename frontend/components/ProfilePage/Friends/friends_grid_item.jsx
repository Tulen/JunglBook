import React from 'react'

class FriendsGridItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let displayName
    if (this.props.displayId === this.props.friend.sender_id) {
      displayName = this.props.friend.sender_fname + ' ' + this.props.friend.sender_lname
    } else {
        displayName = this.props.friend.recipient_fname + ' ' + this.props.friend.recipient_lname
    }
    return (
      <div className="friends-grid-item-container">
        <div className="friends-grid-photo-container">
          <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
        </div>
        <div className="friends-grid-content">
          <p> {displayName} </p>
          <div id="friends-grid-btn">
            <i className="fa fa-check"> </i>
            <p> Friends </p>
          </div>
        </div>
      </div>

    )
  }
}

export default FriendsGridItem

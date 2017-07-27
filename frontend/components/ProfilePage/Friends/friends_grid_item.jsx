import React from 'react'

class FriendsGridItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let profilePhoto
    if (this.props.friendProfile !== null){
      profilePhoto = `${this.props.friendProfile}`
    } else {
      profilePhoto = 'https://s-media-cache-ak0.pinimg.com/736x/b1/df/a5/b1dfa5e1f8fc944f9d5f0ff8d715533c--silhouette-studio-silhouette-portrait.jpg'
    }

    let displayName
    if (this.props.displayId === this.props.friend.sender_id) {
      displayName = this.props.friend.sender_fname + ' ' + this.props.friend.sender_lname
    } else {
        displayName = this.props.friend.recipient_fname + ' ' + this.props.friend.recipient_lname
    }
    return (
      <div className="friends-grid-item-container">
        <div className="friends-grid-photo-container">
          <img src={profilePhoto} />
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

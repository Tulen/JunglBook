import React from 'react'

class FriendWidgetItem extends React.Component {
  render() {

    let profilePhoto
    if (this.props.friendProfile !== null){
      profilePhoto = `${this.props.friendProfile}`
    } else {
      profilePhoto = 'https://s-media-cache-ak0.pinimg.com/736x/b1/df/a5/b1dfa5e1f8fc944f9d5f0ff8d715533c--silhouette-studio-silhouette-portrait.jpg'
    }

    return (

      <div className="widget-item-container">
        <img src={profilePhoto} />
      </div>

    )
  }
}

export default FriendWidgetItem

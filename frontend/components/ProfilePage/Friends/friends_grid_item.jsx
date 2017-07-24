import React from 'react'

class FriendsGridItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="friends-grid-item-container">
        <div className="friends-grid-photo-container">
          <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
        </div>
        <div className="friends-grid-content">
          <p> {this.props.friend.sender_fname} {this.props.friend.sender_lname}</p>
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

import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="prof-header-container">
        <div id="prof-cvr-photo">
          <button id={`edit-cvr-photo-${this.props.bios.id === this.props.session.currentUser.id}`}> <i className="fa fa-camera"> </i> Add/Edit Cover Photo</button>
          <div id="prof-pic">
            <div className={`edit-ppic-overlay-${this.props.bios.id === this.props.session.currentUser.id}`}>
              <i className="fa fa-camera"> </i>
              <p> Update Profile Picture </p>
            </div>
            <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
          </div>
          <div>
            <h2 id="prof-name"> {this.props.bios.fname} {this.props.bios.lname} </h2>
            <button id="prof-friend-btn"> Add Friend </button>
          </div>

        </div>
        <nav id="prof-headline">
          <ul id="prof-nav-links">
            <li>
              <h5> <Link to={`/user/${this.props.pageId}`}> Timeline </Link> </h5>
            </li>
            <li>

              <h5> <Link to={`/user/${this.props.pageId}/about`}> About </Link> </h5>
            </li>
            <li>
              <h5> <Link to={`/user/${this.props.pageId}/friends`}> Friends </Link> </h5>
            </li>
            <li>
              <h5> <Link to={`/user/${this.props.pageId}/photos`}> Photos </Link> </h5>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default ProfileHeader

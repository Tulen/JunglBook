import React from 'react'
import { HashRouter, Link } from 'react-router-dom'
import values from 'lodash/values'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let idArray = values(this.props.friendRequests).map((req) => {
      return [req['sender_id'], req['recipient_id'], req['id']]
    })
    let alreadyFriends = false
    let deleteId

    idArray.forEach((idPair) => {

      if ((idPair[0] === this.props.session.currentUser.id && idPair[1] === this.props.bios.id) ||
          (idPair[1] === this.props.session.currentUser.id && idPair[0] === this.props.bios.id)) {
        alreadyFriends = true;
        deleteId = idPair[2];
      }
    })

    if (alreadyFriends) {
      this.props.removeUserRequest(deleteId, {
        friend_request: {
          sender_id: this.props.session.currentUser.id,
          recipient_id: this.props.bios.id,
          status: "deleted"
        }
      })
    } else {
      this.props.sendUserRequest({
        friend_request: {
          sender_id: this.props.session.currentUser.id,
          recipient_id: this.props.bios.id,
          status: "pending"
        }
      })
    }

  }

  render() {
    let idArray = values(this.props.friendRequests).map((req) => {
      return [req['sender_id'], req['recipient_id'], req['status']]
    })
    let alreadyFriends = false
    let requestStatus
    let requestSenderId
    idArray.forEach((idPair) => {

      if ((idPair[0] === this.props.session.currentUser.id && idPair[1] === this.props.bios.id) ||
          (idPair[1] === this.props.session.currentUser.id && idPair[0] === this.props.bios.id)) {
        alreadyFriends = true
        requestStatus = idPair[2]
        requestSenderId = idPair[0]
      }
    })
    let profileButton
    if (this.props.bios.id !== this.props.session.currentUser.id) {
      if (alreadyFriends) {
        if (requestStatus === "accepted") {
          profileButton = <button id="prof-friend-btn" onClick={this.handleClick}> <i className="fa fa-user"></i> Delete Friend </button>
        } else {
          if (this.props.session.currentUser.id === requestSenderId) {
            profileButton = <button id="prof-friend-btn" onClick={this.handleClick}> <i className="fa fa-user"></i> Cancel Request </button>
          } else {
            profileButton = <button id="prof-friend-btn" onClick={this.handleClick}> <i className="fa fa-user"></i> Accept/Delete Request </button>
          }

        }
      } else {
        profileButton = <button id="prof-friend-btn" onClick={this.handleClick}> <i className="fa fa-user-plus"></i> Add Friend </button>
      }
    } else {
      profileButton = <Link to={`/user/${this.props.session.currentUser.id}/about`}><button id="prof-friend-btn"> <i className="fa fa-pencil"></i> Edit Profile </button></Link>
    }

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
            {profileButton}
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

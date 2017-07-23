import React from 'react'
import merge from 'lodash/merge'

class FriendRequestDropdownItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleConfirm(e) {
    // e.preventDefault();
    let acceptedRequest = merge({}, this.props.request, {status: "accepted"});

    this.props.acceptUserRequest(this.props.request.id, {friend_request: acceptedRequest })

  }

  handleDelete(e) {
    // e.preventDefault();

    this.props.removeUserRequest(this.props.request.id, this.props.request)

  }

  render() {
    return (
      <div className="fr-dropdown-item">
        <div>
          <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
        </div>
        <div>
          <p> {this.props.senderFirst} {this.props.senderLast} </p>
        </div>
        <div>
          <button onClick={this.handleConfirm}> Confirm </button>
          <button onClick={this.handleDelete}> Delete Request </button>
        </div>
       </div>
    )
  }
}

export default FriendRequestDropdownItem

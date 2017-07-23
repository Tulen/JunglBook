import React from 'react'
import merge from 'lodash/merge'

class FriendRequestDropdownItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  handleConfirm(e) {
    // e.preventDefault();
    let acceptedRequest = merge({}, this.props.request, {status: "accepted"});
    console.log("PROPS", this.props.acceptUserRequest);

    this.props.acceptUserRequest(this.props.request.id, {friend_request: acceptedRequest })

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
          <button> Delete Request </button>
        </div>
       </div>
    )
  }
}

export default FriendRequestDropdownItem

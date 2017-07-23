import React from 'react'
import FriendRequestDropdownItem from './friend_request_dropdown_item'
import values from 'lodash/values'


class FriendRequestDropdown extends React.Component {
  constructor(props) {
    super(props);
    console.log("DROPDOWN", props)
  }

  componentWillMount() {
    this.props.fetchUserRequests(this.props.session.currentUser.id)
  }

  render() {
    let requestsArray = values(this.props.friendRequests)
    let requestInfo = requestsArray.map( (request) => (
      <FriendRequestDropdownItem key={request.id} senderFirst={request.sender_fname} senderLast={request.sender_lname} />
    ));
    if (this.props.dropdownHidden) {
      return <div> </div>
    } else {
      return (
        <div className="nav-fr-dropdown">
          <div className="fr-dropdown-header"> <p> Friend Requests </p> </div>
          { requestInfo }
        </div>
      )
    }

  }
}

export default FriendRequestDropdown

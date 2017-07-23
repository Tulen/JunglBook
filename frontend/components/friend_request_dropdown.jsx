import React from 'react'
import FriendRequestDropdownItemContainer from './friend_request_dropdown_item_container'
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
    let requestsArray = values(this.props.friendRequests).filter((request) => {
      return request.status === "pending"
    })
    let requestInfo = requestsArray.map( (request) => (
      <FriendRequestDropdownItemContainer key={request.id} request={request} senderFirst={request.sender_fname} senderLast={request.sender_lname} />
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

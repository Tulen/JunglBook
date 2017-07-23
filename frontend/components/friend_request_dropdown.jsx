import React from 'react'
import FriendRequestDropdownItem from './friend_request_dropdown_item'


class FriendRequestDropdown extends React.Component {
  constructor(props) {
    super(props);
    console.log("DROPDOWN", props)
  }

  render() {
    if (this.props.dropdownHidden) {
      return <div> </div>
    } else {
      return (
        <div className="nav-fr-dropdown">
          <div className="fr-dropdown-header"> <p> Friend Requests </p> </div>
          <FriendRequestDropdownItem />
          <FriendRequestDropdownItem />
          <FriendRequestDropdownItem />
          <FriendRequestDropdownItem />
          <FriendRequestDropdownItem />
        </div>
      )
    }

  }
}

export default FriendRequestDropdown

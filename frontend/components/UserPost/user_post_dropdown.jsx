import React from 'react'
import values from 'lodash/values'


class UserPostDropdown extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    if (this.props.dropdownHidden) {
      return <div> </div>
    } else {
      return (
        <div className="pbh-dropdown">
          <ul>
            <li>
              <p> Edit </p>
            </li>
            <li>
              <p className="pbh-delete"> Delete </p>
            </li>
          </ul>


        </div>
      )
    }

  }
}

export default UserPostDropdown

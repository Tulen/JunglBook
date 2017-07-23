import React from 'react'


class FriendRequestDropdownItem extends React.Component {
  render() {
    return (
      <div className="fr-dropdown-item">
        <div>
          <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
        </div>
        <div>
          <p> Quokka </p>
        </div>
        <div>
          <button> Confirm </button>
          <button> Delete Request </button>
        </div>
       </div>
    )
  }
}

export default FriendRequestDropdownItem

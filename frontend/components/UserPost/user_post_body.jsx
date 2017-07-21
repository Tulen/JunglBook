import React from 'react'

class UserPostBody extends React.Component {
  render() {
    return (
      <div className="post-body-container">
        <div className="post-body-heading">
          <img className="post-body-pic" src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
          <div className="pbh-text">
            <div className="pbh-text-users">
              <p> Quokka  </p>
                <i className="fa fa-caret-right"> </i>
              <p> Quokka </p>
            </div>
            <div className="pbh-text-date">
              <p> June 18, 2017 </p>
            </div>
          </div>
        </div>
        <div className="post-body-content">
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>



      </div>
    )
  }
}

export default UserPostBody

import React from 'react'

class ProfileHeader extends React.Component {
  render() {
    return (
      <div id="prof-header-container">
        <div id="prof-cvr-photo">
          <div id="prof-pic">
            <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
          </div>
           <h2 id="prof-name"> Quokka </h2>
        </div>
        <nav id="prof-headline">
          <ul id="prof-nav-links">
            <li>
              <h5> Timeline </h5>
            </li>
            <li>
              <h5> About </h5>
            </li>
            <li>
              <h5> Friends </h5>
            </li>
            <li>
              <h5> Photos </h5>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default ProfileHeader

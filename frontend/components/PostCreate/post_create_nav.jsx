import React from 'react'

class PostCreateNav extends React.Component {
  render() {
    return (
      <ul className="post-create-nav">
        <li> <i className="fa fa-pencil-square-o"></i> Status </li>
        <li> <i className="fa fa-camera-retro"></i> Photo/Video </li>
        <li> <i className="fa fa-video-camera"></i> Live Video </li>
        <li> <i className="fa fa-flag"></i> Life Event </li>
      </ul>

    )
  }
}

export default PostCreateNav

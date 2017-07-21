import React from 'react'
import PostCreateNav from './post_create_nav'
import PostCreateBody from './post_create_body'

class PostCreate extends React.Component {
  render() {
    return (
      <div className="prof-subcomponent post-create">
        <PostCreateNav />
        <PostCreateBody />
      </div>
    )
  }
}

export default PostCreate

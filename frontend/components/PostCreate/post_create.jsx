import React from 'react'
import PostCreateNav from './post_create_nav'
import PostCreateBodyContainer from './post_create_body_container'

class PostCreate extends React.Component {
  render() {
    return (
      <div className="prof-subcomponent post-create">
        <PostCreateNav />
        <PostCreateBodyContainer />
      </div>
    )
  }
}

export default PostCreate

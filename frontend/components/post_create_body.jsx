import React from 'react'

class PostCreateBody extends React.Component {
  render() {
    return (
      <div>
        <div className="new-post-form">
          <img className="post-create-photo" src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg"/>
          <input type="text" placeholder="What's On Your Mind?"/>
        </div>
        <div className="new-post-footer">
          <button> Post </button>
        </div>
      </div>

    )
  }
}

export default PostCreateBody

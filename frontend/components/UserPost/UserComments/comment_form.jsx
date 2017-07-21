import React from 'react'

class CommentForm extends React.Component {
  render() {
    return (
      <div className="comment-form">
        <img className="comment-pic" src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
        <input type="text" placeholder="Write a comment..."/> 
      </div>
    )
  }
}

export default CommentForm

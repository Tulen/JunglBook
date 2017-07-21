import React from 'react'

class CommentListItem extends React.Component {
  render() {
    return (
      <div className="comment-list-item">
        <img className="comment-pic" src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg"/>
        <div className="comment-body-container">
          <div className="comment-body">
            <span className="comment-username"> Quokka </span> This is a comment!
          </div>
          <div className="comment-actions">
            <p> Like </p>
            <p> Reply </p>
            <p> May 14, 2016 at 10:13am </p>


          </div>
        </div>
      </div>
    )
  }
}

export default CommentListItem

import React from 'react'

class CommentListItem extends React.Component {
  render() {
    console.log("CLIPROPS", this.props)
    if (this.props.comment.post_id === this.props.postId) {
      return (
        <div className="comment-list-item">
          <img className="comment-pic" src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg"/>
          <div className="comment-body-container">
            <div className="comment-body">
              <span className="comment-username"> {this.props.comment.author_fname + " " + this.props.comment.author_lname} </span> {this.props.comment.body}
            </div>
            <div className="comment-actions">
              <p> Like </p>
              <p> Reply </p>
              <p> -  {this.props.comment.post_date} </p>
            </div>
          </div>
        </div>
        )
    } else {
      return <div></div>
    }


  }
}

export default CommentListItem

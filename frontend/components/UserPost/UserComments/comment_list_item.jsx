import React from 'react'

class CommentListItem extends React.Component {


  render() {

    //https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    function timeSince(date) {
      let seconds = Math.floor((new Date() - date) / 1000);
      let interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
        return interval + " years";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + " months";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + " days";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + " hours";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    }

    if (this.props.comment.post_id === this.props.postId) {
      console.log(new Date(this.props.comment.created_at));
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
              <p> -  {timeSince(new Date(this.props.comment.created_at))} </p>
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

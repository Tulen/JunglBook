import React from 'react'
import CommentListDropdownContainer from './comment_list_dropdown_container'

class CommentListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownHidden: true
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    if (this.state.dropdownHidden) {
      this.setState({dropdownHidden: false})
    } else {
      this.setState({dropdownHidden: true})
    }
  }

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
          <div className="pbh-left-group">
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

          <div className="pbh-icons comment-body-icon">
            <i className="fa fa-ellipsis-h" onClick={this.toggleDropdown}> </i>
            <CommentListDropdownContainer comment={this.props.comment} dropdownHidden={this.state.dropdownHidden}/>
          </div>
        </div>
        )
    } else {
      return <div></div>
    }


  }
}

export default CommentListItem

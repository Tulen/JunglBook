import React from 'react'
import CommentListDropdownContainer from './comment_list_dropdown_container'
import { Link } from 'react-router-dom'

class CommentListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownHidden: true,
      replyHidden: true
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  toggleDropdown() {
    if (this.state.dropdownHidden) {
      this.setState({dropdownHidden: false})
    } else {
      this.setState({dropdownHidden: true})
    }
  }

  handleClose() {
    setTimeout(() => {
      this.toggleDropdown()
    }, 150)
  }

  toggleReply() {
    if (this.state.replyHidden) {
      this.setState({replyHidden: false})
    } else {
      this.setState({replyHidden: true})
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

    let commentEdited

    if (this.props.comment.edited) {
      commentEdited = <p> - {timeSince(new Date(this.props.comment.updated_at))} (Edited) </p>
    } else {
      commentEdited = <p> - {timeSince(new Date(this.props.comment.created_at))} </p>
    }

    let profilePhoto
    if (this.props.comment.author_profile){
      profilePhoto = `${this.props.comment.author_profile}`
    } else {
      profilePhoto = 'https://s-media-cache-ak0.pinimg.com/736x/b1/df/a5/b1dfa5e1f8fc944f9d5f0ff8d715533c--silhouette-studio-silhouette-portrait.jpg'
    }

    if (this.props.comment.post_id === this.props.postId) {
      return (
        <div className="comment-list-item">
          <div className="pbh-left-group">
            <Link to={`/user/${this.props.comment.author_id}`}> <img className="comment-pic" src={profilePhoto}/> </ Link>
            <div className="comment-body-container">
              <div className="comment-body">
                  <span className="comment-username"> <Link to={`/user/${this.props.comment.author_id}`}>  {this.props.comment.author_fname + " " + this.props.comment.author_lname} </Link> </span> {this.props.comment.body}
              </div>
              <div className="comment-actions">
                <p> Like </p>
                <p onClick={this.toggleReply}> Reply </p>
                {commentEdited}
              </div>
            </div>
          </div>

          <div className={`pbh-icons comment-body-icon display-${this.props.comment.author_id === this.props.userId}`}>
            <button className="fa fa-ellipsis-h" onClick={this.toggleDropdown} onBlur={this.handleClose}> </button>
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

import React from 'react'
import UserPostBodyContainer from './user_post_body_container'
import CommentListContainer from './UserComments/comment_list_container'
import { findDOMNode } from 'react-dom'
import CommentFormContainer from './UserComments/comment_form_container'

class UserPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({focused: true})
  }

  render() {
    return (
      <div className="user-post">
        <UserPostBodyContainer post={this.props.post} profId={this.props.profId} />
        <div className="user-post-actions">
          <span>
            <i className="fa fa-thumbs-up"> </i>
            <p> Like </p>
          </span>
          <span>
            <i className="fa fa-comment"> </i>
            <p onClick={this.handleClick}> Comment </p>
          </span>
          <span>
            <i className="fa fa-share"> </i>
            <p> Share </p>
          </span>
        </div>
        <CommentListContainer focused={this.state.focused} inputRef={() => (this.handleKeyPress)} postId={this.props.post.id}/>
      </div>
    )
  }
}

export default UserPost

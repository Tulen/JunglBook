import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  update(val) {
    return e => this.setState({ [val]: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key == 'Enter') {
      let newComment = {
        body: this.state.body,
        author_id: this.props.session.currentUser.id,
        post_id: this.props.postId
      }
      this.props.createComment({comment: newComment})
    }
  }

  render() {
    let profilePhoto
    if (this.props.session.currentUser.profile_url){
      profilePhoto = `${this.props.session.currentUser.profile_url}`
    } else {
      profilePhoto = 'https://s-media-cache-ak0.pinimg.com/736x/b1/df/a5/b1dfa5e1f8fc944f9d5f0ff8d715533c--silhouette-studio-silhouette-portrait.jpg'
    }

    return (
      <div className="comment-form">
        <img className="comment-pic" src={profilePhoto} />
        <input ref={this.props.inputRef} value={this.state.body} onKeyPress={this.handleKeyPress} onChange={this.update('body')}  type="text" placeholder="Write a comment..."/>
      </div>
    )
  }
}

export default CommentForm

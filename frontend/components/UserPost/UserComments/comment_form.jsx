import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      focused: this.props.focused
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.focused) {
      this.input.focus();
    }
  }

  update(val) {
    return e => this.setState({ [val]: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key == 'Enter') {
      let newComment = {
        body: this.state.body,
        author_id: this.props.session.currentUser.id,
        post_id: this.props.postId,
        parent_id: this.props.parentCommentId
      }
      this.props.createComment({comment: newComment})
      this.setState({body: ''})
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
      <div className={`comment-form nested-${this.props.nested}`}>
        <img className="comment-pic" src={profilePhoto} />
        <input ref={(el) => {this.input = el;}} value={this.state.body} onKeyPress={this.handleKeyPress} onChange={this.update('body')}  type="text" placeholder="Write a comment..."/>
      </div>
    )
  }
}

export default CommentForm

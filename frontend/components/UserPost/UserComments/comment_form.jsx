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
    return (
      <div className="comment-form">
        <img className="comment-pic" src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
        <input ref={this.props.inputRef} value={this.state.body} onKeyPress={this.handleKeyPress} onChange={this.update('body')}  type="text" placeholder="Write a comment..."/>
      </div>
    )
  }
}

export default CommentForm

import React from 'react'

class PostCreateBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(val) {
    return e => this.setState({ [val]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newPost = {
      body: this.state.body,
      author_id: this.props.session.currentUser.id,
      wall_id: this.props.bios.id
    }
    this.props.createUserPost({post: newPost})

  }

  render() {
    return (
      <div>
        <div className="new-post-form">
          <img className="post-create-photo" src={`${this.props.session.currentUser.profile_url}`}/>
          <input value={this.state.body} onChange={this.update('body')} type="text" placeholder="What's On Your Mind?"/>
        </div>
        <div className="new-post-footer">
          <button onClick={this.handleSubmit}> Post </button>
        </div>
      </div>

    )
  }
}

export default PostCreateBody

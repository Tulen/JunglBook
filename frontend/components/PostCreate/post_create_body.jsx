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
    let profilePhoto
    if (this.props.session.currentUser.profile_url){
      profilePhoto = `${this.props.session.currentUser.profile_url}`
    } else {
      profilePhoto = 'https://s-media-cache-ak0.pinimg.com/736x/b1/df/a5/b1dfa5e1f8fc944f9d5f0ff8d715533c--silhouette-studio-silhouette-portrait.jpg'
    }

    return (
      <div>
        <div className="new-post-form">
          <img className="post-create-photo" src={profilePhoto}/>
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

import React from 'react'
import UserPostDropdownContainer from './user_post_dropdown_container'

class UserPostBody extends React.Component {
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
    let postNameDisplay
    let postEdited

    if (this.props.profId == this.props.post.author_id) {
      postNameDisplay =
      <div className="pbh-text-users">
        <p> {this.props.post.author_fname + ' ' + this.props.post.author_lname}  </p>
      </div>


    } else {
      postNameDisplay =
      <div className="pbh-text-users">
        <p> {this.props.post.author_fname + ' ' + this.props.post.author_lname}  </p>
          <i className="fa fa-caret-right"> </i>
        <p> Quokka </p>
      </div>


    }

    if (this.props.post.edited) {
      postEdited = <p> {this.props.post.edit_date} (Edited) </p>
    } else {
      postEdited = <p> {this.props.post.post_date} </p>
    }

    return (
      <div className="post-body-container">
        <div className="post-body-heading">
          <img className="post-body-pic" src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
          <div className="pbh-text">
            {postNameDisplay}
            <div className="pbh-text-date">
              {postEdited}
            </div>
          </div>
          <div className="pbh-icons">
            <i className="fa fa-angle-down" onClick={this.toggleDropdown}></i>
            <UserPostDropdownContainer post={this.props.post} dropdownHidden={this.state.dropdownHidden}/>

          </div>
        </div>
        <div className="post-body-content">
          <p> {this.props.post.body} </p>
        </div>
      </div>
    )
  }
}

export default UserPostBody

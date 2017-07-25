import React from 'react'

class UserPostBody extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let postNameDisplay


    return (
      <div className="post-body-container">
        <div className="post-body-heading">
          <img className="post-body-pic" src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
          <div className="pbh-text">
            <div className="pbh-text-users">
              <p> {this.props.post.author_fname + ' ' + this.props.post.author_lname}  </p>
                <i className="fa fa-caret-right"> </i>
              <p> Quokka </p>
            </div>
            <div className="pbh-text-date">
              <p> June 18, 2017 </p>
            </div>
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

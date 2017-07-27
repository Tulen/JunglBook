import React from 'react'

class PhotosShow extends React.Component {

  constructor(props) {
    super(props)
    this.handleProfile = this.handleProfile.bind(this)
    this.handleCover = this.handleCover.bind(this)
  }

  handleProfile(e) {
    e.preventDefault()
    let newProfile = {
      profile_url: this.props.showImg
    }
    this.props.updateUserBio(this.props.session.currentUser.id, {user: newProfile})
  }

  handleCover(e) {
    e.preventDefault()
    let newCover = {
      cover_url: this.props.showImg
    }
    this.props.updateUserBio(this.props.session.currentUser.id, {user: newCover})
  }

  render() {
      return (
        <div className ="photos-show">
          <div className="photos-show-left">
            <img className="photos-show-img" src={`${this.props.showImg}`} />
          </div>
          <div className="photos-show-right">
            <div onClick={this.handleProfile}>
              <h3>
                Set as profile picture
              </h3>
            </div>

            <div onClick={this.handleCover}>
              <h3>
                Set as cover photo
              </h3>
            </div>
          </div>
        </div>
      )
  }
}

export default PhotosShow

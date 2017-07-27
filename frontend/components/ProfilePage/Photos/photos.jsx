import React from 'react'
import PhotosGridContainer from './photos_grid_container'

class Photos extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
  }

  upload(e) {
    e.preventDefault()
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if (error === null) {
        let url = images[0].url
        let newImg = {
          img_url: url,
          owner_id: this.props.session.currentUser.id,
          is_profile: "no",
          is_cover: "false"
        }
        this.props.uploadPhoto({photo: newImg})
      }
    });
  }

  render() {
    return (
      <div id="photos-container">
        <div className="detail-header-container">
          <div className="detail-header">
            <i className="fa fa-photo"> </i>
            <h4> Photos </h4>
          </div>
          <div className="detail-header-buttons">
            <button onClick={this.upload}> Upload Photo </button>
          </div>
        </div>
        <PhotosGridContainer />
      </div>

    )
  }
}

export default Photos

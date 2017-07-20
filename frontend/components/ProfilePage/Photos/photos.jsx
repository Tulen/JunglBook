import React from 'react'
import PhotosGrid from './photos_grid'

class Photos extends React.Component {
  render() {
    return (
      <div id="photos-container">
        <div className="detail-header-container">
          <div className="detail-header">
            <i className="fa fa-photo"> </i>
            <h4> Photos </h4>
          </div>
        </div>
        <PhotosGrid />
      </div>

    )
  }
}

export default Photos

import React from 'react'
import PhotosGridContainer from './photos_grid_container'

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
        <PhotosGridContainer />
      </div>

    )
  }
}

export default Photos

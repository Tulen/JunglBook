import React from 'react'

class PhotosGridItem extends React.Component {
  render() {
    return (
      <div className="photos-grid-item-container">
        <img src={`${this.props.photoImg}`} />
      </div>

    )
  }
}

export default PhotosGridItem

import React from 'react'
import PhotosGridItem from './photos_grid_item'
import values from 'lodash/values'

class PhotosGrid extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let photosListArr = values(this.props.photos)

    let photosList = photosListArr.map((photo) => {
      return( <li key={photo.id}>  <PhotosGridItem photoImg={photo.img_url} /></li>)
    })

    return (
      <div id="photos-grid">
        <ul>
          { photosList }
        </ul>
      </div>

    )
  }
}

export default PhotosGrid

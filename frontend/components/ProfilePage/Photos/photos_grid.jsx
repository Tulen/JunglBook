import React from 'react'
import PhotosGridItem from './photos_grid_item'

class PhotosGrid extends React.Component {
  render() {
    return (
      <div id="photos-grid">
        <ul>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
          <li> <PhotosGridItem/> </li>
        </ul>
      </div>

    )
  }
}

export default PhotosGrid

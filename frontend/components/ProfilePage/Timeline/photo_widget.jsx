import React from 'react'
import PhotoWidgetItem from './photo_widget_item'

class PhotoWidget extends React.Component {
  render() {
    return (
      <div className="prof-subcomponent"  id="photo-widget">
        <div className="prof-subcomponent-header">
          <div className="prof-subcomponent-icon-container">
            <i className="fa fa-photo"></i>
          </div>
          Photos
        </div>
        <div className="widget-grid">
          <ul>
            <li> <PhotoWidgetItem /> </li>
            <li> <PhotoWidgetItem /> </li>
            <li> <PhotoWidgetItem /> </li>
    
          </ul>

        </div>

      </div>

    )
  }
}

export default PhotoWidget

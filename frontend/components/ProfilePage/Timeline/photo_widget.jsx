import React from 'react'
import PhotoWidgetItem from './photo_widget_item'
import { Link } from 'react-router-dom'

class PhotoWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="prof-subcomponent"  id="photo-widget">
        <div className="prof-subcomponent-header">
          <div className="prof-subcomponent-icon-container">
            <i className="fa fa-photo"></i>
          </div>
          <Link to={`/user/${this.props.profId}/photos/`}> Photos </Link>
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

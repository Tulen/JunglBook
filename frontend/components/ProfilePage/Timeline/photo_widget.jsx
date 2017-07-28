import React from 'react'
import PhotoWidgetItem from './photo_widget_item'
import { Link } from 'react-router-dom'
import values from 'lodash/values'

class PhotoWidget extends React.Component {
  constructor(props) {
    super(props)
    let idReg = /\d+/g;
    let currentProfId = this.props.location.pathname.match( idReg )[0];
    this.state = {
      currentProfId: currentProfId
    }
  }

  componentDidMount() {
    let idReg = /\d+/g;
    let currentProfId = this.props.location.pathname.match( idReg )[0];
    this.props.fetchUserPhotos(currentProfId)
  }

  componentWillReceiveProps(nextProps) {
    let idReg = /\d+/g;
    let currentProfId = nextProps.location.pathname.match( idReg )[0];
    if (this.state.currentProfId !== currentProfId) {
      this.setState({currentProfId})
      this.props.fetchUserPhotos(currentProfId)
    }
  }

  render() {
    let photosListArr = values(this.props.photos)

    let photosList = photosListArr.map((photo) => {
      return( <li key={photo.id}>  <PhotoWidgetItem photoImg={photo.img_url} /></li>)
    })

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
            { photosList }
          </ul>

        </div>

      </div>

    )
  }
}

export default PhotoWidget

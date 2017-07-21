import React from 'react'

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
      </div>

    )
  }
}

export default PhotoWidget

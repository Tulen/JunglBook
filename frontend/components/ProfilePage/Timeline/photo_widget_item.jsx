import React from 'react'

class PhotoWidgetItem extends React.Component {
  render() {
    return (

      <div className="widget-item-container">
        <img src={`${this.props.photoImg}`} />
      </div>

    )
  }
}

export default PhotoWidgetItem

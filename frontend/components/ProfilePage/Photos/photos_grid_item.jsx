import React from 'react'

class PhotosGridItem extends React.Component {

  constructor(props){
    super(props)
    this.handleModal = this.handleModal.bind(this)
  }

  handleModal(e) {
    this.props.handleModal(this.props.photoImg)
  }

  render() {
    return (
      <li onClick={this.handleModal}>
        <div className="photos-grid-item-container">
          <img src={`${this.props.photoImg}`} />
        </div>
      </li>


    )
  }
}

export default PhotosGridItem

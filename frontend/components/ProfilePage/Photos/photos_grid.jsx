import React from 'react'
import PhotosGridItem from './photos_grid_item'
import values from 'lodash/values'
import Modal from 'react-modal'
import PhotosShow from './photos_show'

class PhotosGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    this.props.fetchUserPhotos(this.props.bios.id)
  }

  handleClick() {
    console.log(show)
  }

  render() {
    let photosListArr = values(this.props.photos)

    let photosList = photosListArr.map((photo) => {
      return( <li key={photo.id} onClick={this.openModal}>  <PhotosGridItem photoImg={photo.img_url} /></li>)
    })

    return (
      <div id="photos-grid">
        <Modal
          className={{
              base: 'photosShowModal',
              afterOpen: 'photosShowModal_after-open',
              beforeClose: 'photosShowModal_before-close'
            }}
            overlayClassName={{
              base: 'photosShowOverlay',
              afterOpen: 'photosShowOverlay_after-open',
              beforeClose: 'photosShowOverlay_before-close'
            }}
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           contentLabel="Bio Form Modal"
         >
          <PhotosShow closeModal={this.closeModal}/>

         </Modal>
        <ul>
          { photosList }
        </ul>
      </div>

    )
  }
}

export default PhotosGrid

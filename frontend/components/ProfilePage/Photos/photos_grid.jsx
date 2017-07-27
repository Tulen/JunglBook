import React from 'react'
import PhotosGridItem from './photos_grid_item'
import values from 'lodash/values'
import Modal from 'react-modal'
import PhotosShowContainer from './photos_show_container'

class PhotosGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      modalImg: ''
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  handleModal(modalImg) {
    this.setState({modalImg});
    this.openModal();
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    this.props.fetchUserPhotos(this.props.bios.id)
  }

  render() {
    let photosListArr = values(this.props.photos)

    let photosList = photosListArr.map((photo) => {
      return(<PhotosGridItem key={photo.id} handleModal={e => this.handleModal(e)} photoImg={photo.img_url} />)
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
          <PhotosShowContainer showImg={this.state.modalImg} closeModal={this.closeModal}/>

         </Modal>
        <ul>
          { photosList }
        </ul>
      </div>

    )
  }
}

export default PhotosGrid

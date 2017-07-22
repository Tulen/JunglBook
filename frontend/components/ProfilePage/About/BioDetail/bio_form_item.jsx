import React from 'react'
import Modal from 'react-modal'

class BioFormItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
  this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="bci-container" onClick={this.openModal}>
        <Modal
          className={{
              base: 'aboutFormModal',
              afterOpen: 'aboutFormModal_after-open',
              beforeClose: 'aboutFormModal_before-close'
            }}
            overlayClassName={{
              base: 'aboutFormOverlay',
              afterOpen: 'aboutFormOverlay_after-open',
              beforeClose: 'aboutFormOverlay_before-close'
            }}
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           contentLabel="Bio Form Modal"
         >

           <h2 ref={subtitle => this.subtitle = subtitle}> Your {this.props.valName} </h2>

           <form>
             <input type="text"/>
             <button> Update Info </button>
           </form>
           <button onClick={this.closeModal}>close</button>
         </Modal>
        <div> <i className="fa fa-plus"> </i> </div>
        Add your {this.props.valName}
        <Modal />
      </div>
    )
  }
}

export default BioFormItem

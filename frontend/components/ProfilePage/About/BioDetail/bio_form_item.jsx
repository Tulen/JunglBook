import React from 'react'
import Modal from 'react-modal'

class BioFormItem extends React.Component {
  constructor(props) {
    super(props)
    console.log("BFI", props)
    this.state = {
      modalIsOpen: false,
      inputVal: ''
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
  this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUserBio(this.props.bios.id ,{user: {[`${this.props.valName}`]: this.state.inputVal}})
    this.closeModal();
  }

  update(val) {
    return e => this.setState({ [val]: e.target.value });
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
           <input className="modalInput" type="text" value={this.state.password} onChange={this.update("inputVal")}/>
           <div>
             <button onClick={this.handleSubmit}> Update Info </button>
             <button onClick={this.closeModal}> Cancel </button>
           </div>

         </Modal>
        <div> <i className="fa fa-plus"> </i> </div>
        Add your {this.props.valName}
        <Modal />
      </div>
    )
  }
}

export default BioFormItem

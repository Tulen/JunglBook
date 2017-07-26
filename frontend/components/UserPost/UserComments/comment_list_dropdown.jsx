import React from 'react'
import values from 'lodash/values'
import Modal from 'react-modal'


class CommentListDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      inputVal: ''
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openModal() {
  this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleEdit(e) {
    e.preventDefault();
    let newComment = Object.assign({}, this.props.comment)
    newComment["body"] = this.state.inputVal
    this.props.editComment(this.props.comment.id, newComment)
    this.closeModal();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id)
  }

  update(val) {
    return e => this.setState({ [val]: e.target.value });
  }


  render() {

    if (this.props.dropdownHidden) {
      return <div> </div>
    } else {
      return (
        <div className="pbh-dropdown">
          <ul>
            <li>
              <p onClick={this.openModal}> Edit </p>
            </li>
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
               <div>
                 <h2 ref={subtitle => this.subtitle = subtitle}> Edit Comment </h2>
                 <input className="modalInput" type="text" onChange={this.update("inputVal")}/>
                 <div>
                   <button onClick={this.handleEdit}> Edit </button>
                   <button onClick={this.closeModal}> Cancel </button>
                 </div>
               </div>

             </Modal>
            <li>
              <p onClick={this.handleDelete} className="pbh-delete"> Delete </p>
            </li>
          </ul>


        </div>
      )
    }

  }
}

export default CommentListDropdown

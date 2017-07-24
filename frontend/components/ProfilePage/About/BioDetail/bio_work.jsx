import React from 'react'
import BioFormItemContainer from './bio_form_item_container'



class BioWork extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bio-category-container">
        <div className="bio-category-item">
          <div className="bci-header">
            Work
          </div>
          <div className="bci-body">
            <BioFormItemContainer canEdit={this.props.bios.id === this.props.session.currentUser.id} valName="work" valContent={this.props.bios.work} />
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Education </div>
            <div className="bci-body">
              <BioFormItemContainer canEdit={this.props.bios.id === this.props.session.currentUser.id} valName="education" valContent={this.props.bios.education} />
            </div>
        </div>
      </div>
    )
  }
}

export default BioWork

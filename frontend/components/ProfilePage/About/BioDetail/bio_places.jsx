import React from 'react'
import BioFormItemContainer from './bio_form_item_container'

class BioPlaces extends React.Component {
  render() {
    return (
      <div className="bio-category-container">
        <div className="bio-category-item">
          <div className="bci-header"> Current City </div>
          <div className="bci-body">
            <BioFormItemContainer canEdit={this.props.bios.id === this.props.session.currentUser.id} valName="current_city" valContent={this.props.bios.current_city}/>
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Hometown </div>
          <div className="bci-body">
            <BioFormItemContainer canEdit={this.props.bios.id === this.props.session.currentUser.id} valName="hometown" valContent={this.props.bios.hometown}/>
          </div>
        </div>
      </div>
    )
  }
}

export default BioPlaces

import React from 'react'
import BioFormItemContainer from './bio_form_item_container'

class BioDetails extends React.Component {
  render() {
    return (
      <div className="bio-category-container">
        <div className="bio-category-item">
          <div className="bci-header"> Relationship </div>
          <div className="bci-body">
            <BioFormItemContainer valName="relationship" valContent={this.props.bios.relationship} />
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Nickname </div>
          <div className="bci-body">
            <BioFormItemContainer valName="nickname" valContent={this.props.bios.nickname} />
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Favorite Quote </div>
          <div className="bci-body">
            <BioFormItemContainer valName="favorite_quote" valContent={this.props.bios.favorite_quote} />
          </div>
        </div>
      </div>
    )
  }
}

export default BioDetails

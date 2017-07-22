import React from 'react'
import BioFormItemContainer from './bio_form_item_container'



class BioWork extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)

  }

  render() {
    return (
      <div className="bio-category-container">
        <div className="bio-category-item">
          <div className="bci-header">
            Work
          </div>
          <div className="bci-body">
            <BioFormItemContainer valName="work" />
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Education </div>
            <div className="bci-body">
              <BioFormItemContainer valName="education" />
            </div>
        </div>
      </div>
    )
  }
}

export default BioWork

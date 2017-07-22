import React from 'react'
import BioFormItem from './bio_form_item'



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
            <BioFormItem valName="work" />
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Education </div>
            <div className="bci-body">
              <BioFormItem valName="education" />
            </div>
        </div>
      </div>
    )
  }
}

export default BioWork

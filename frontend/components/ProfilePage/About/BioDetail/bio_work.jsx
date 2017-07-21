import React from 'react'

class BioWork extends React.Component {
  render() {
    return (
      <div className="bio-category-container">
        <div className="bio-category-item">
          <div className="bci-header">
            Work
          </div>
          <div className="bci-body">
            <div className="bci-container">
              <div> <i className="fa fa-plus"> </i> </div>
              Add a workplace
            </div>
          </div>


        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Education </div>
            <div className="bci-body">
              <div className="bci-container">
                <div> <i className="fa fa-plus"> </i> </div>
                Add your education
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default BioWork

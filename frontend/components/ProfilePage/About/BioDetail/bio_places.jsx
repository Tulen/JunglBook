import React from 'react'

class BioPlaces extends React.Component {
  render() {
    return (
      <div className="bio-category-container">
        <div className="bio-category-item">
          <div className="bci-header"> Current City </div>
          <div className="bci-body">
            <div className="bci-container">
              <div> <i className="fa fa-plus"> </i> </div>
              Add your current city
            </div>
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Hometown </div>
          <div className="bci-body">
            <div className="bci-container">
              <div> <i className="fa fa-plus"> </i> </div>
              Add your hometown
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BioPlaces

import React from 'react'

class BioDetails extends React.Component {
  render() {
    return (
      <div className="bio-category-container">
        <div className="bio-category-item">
          <div className="bci-header"> Relationship </div>
          <div className="bci-body">
            <div className="bci-container">
              <div> <i className="fa fa-plus"> </i> </div>
              Add your relationship staus
            </div>
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Nickname </div>
          <div className="bci-body">
            <div className="bci-container">
              <div> <i className="fa fa-plus"> </i> </div>
              Add your nickname
            </div>
          </div>
        </div>
        <div className="bio-category-item">
          <div className="bci-header"> Favorite Quote </div>
          <div className="bci-body">
            <div className="bci-container">
              <div> <i className="fa fa-plus"> </i> </div>
              Add your favorite quote
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BioDetails

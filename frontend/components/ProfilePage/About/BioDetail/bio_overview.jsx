import React from 'react'

class BioOverview extends React.Component {
  render() {
    return (
      <div className="bio-overview-container">
        <div className="bio-overview-left">
          <ul>
            <li className="bio-overview-item">
              Bio overview item
            </li>
            <li className="bio-overview-item">
              Bio overview item
            </li>
            <li className="bio-overview-item">
              Bio overview item
            </li>
            <li className="bio-overview-item">
              Bio overview item
            </li>
          </ul>
        </div>
        <div className="bio-overview-right">
          <ul>
            <li> Details </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default BioOverview

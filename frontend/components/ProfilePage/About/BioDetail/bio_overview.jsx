import React from 'react'
import BioOverviewItem from './bio_overview_item'

class BioOverview extends React.Component {
  render() {
    return (
      <div className="bio-overview-container">
        <div className="bio-overview-left">
          <ul>
            <li className="bio-overview-item">
              <BioOverviewItem />
            </li>
            <li className="bio-overview-item">
              <BioOverviewItem />
            </li>
            <li className="bio-overview-item">
              <BioOverviewItem />
            </li>
            <li className="bio-overview-item">
              <BioOverviewItem />
            </li>
          </ul>
        </div>
        <div className="bio-overview-right">
          <ul>
            <li>
              <i className="fa fa-building"></i>
              <p> Works at </p>
            </li>
            <li>
              <i className="fa fa-home"></i>
              <p> Hometown </p>
            </li>
            <li>
              <i className="fa fa-birthday-cake"></i>
              <p> Birthday </p>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default BioOverview

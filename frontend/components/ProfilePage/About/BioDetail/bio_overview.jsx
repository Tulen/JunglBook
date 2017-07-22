import React from 'react'
import BioOverviewItem from './bio_overview_item'
import { Link } from 'react-router-dom'

class BioOverview extends React.Component {
  constructor(props) {
    super(props)
    console.log("BOVERVIEW", props)
  }

  render() {
    return (
      <div className="bio-overview-container">
        <div className="bio-overview-left">
          <ul>
            <li className="bio-overview-item">
              <Link to="/user/about/work"> <BioOverviewItem valName="your education" valContent={ this.props.bios.education } /> </Link>
            </li>
            <li className="bio-overview-item">
              <Link to="/user/about/places"> <BioOverviewItem valName="your current city" valContent={ this.props.bios.current_city } /> </Link>
            </li>
            <li className="bio-overview-item">
              <Link to="/user/about/details"> <BioOverviewItem valName="your relationship status" valContent={ this.props.bios.relationship } /> </Link>
            </li>
            <li className="bio-overview-item">
              <Link to="/user/about/details"> <BioOverviewItem valName="your favorite quote" valContent={ this.props.bios.favorite_quote } /> </Link>
            </li>
          </ul>
        </div>
        <div className="bio-overview-right">
          <ul>
            <li>
              <i className="fa fa-birthday-cake"></i>
              <p> Birthday: {this.props.bios.birthday} </p>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default BioOverview

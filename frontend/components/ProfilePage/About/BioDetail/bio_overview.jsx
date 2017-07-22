import React from 'react'
import BioOverviewItem from './bio_overview_item'
import { Link } from 'react-router-dom'

class BioOverview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bio-overview-container">
        <div className="bio-overview-left">
          <ul>
            <li className="bio-overview-item">
              <p className="bci-header boi-headline"> Went to school at: </p>
              <Link to={`/user/${this.props.bios.id}/about/work`}> <BioOverviewItem valName="education" valContent={ this.props.bios.education } /> </Link>
            </li>
            <li className="bio-overview-item">
              <p className="bci-header boi-headline"> Currently lives in: </p>
            <Link to={`/user/${this.props.bios.id}/about/places`}> <BioOverviewItem valName="current_city" valContent={ this.props.bios.current_city } /> </Link>
            </li>
            <li className="bio-overview-item">
              <p className="bci-header boi-headline"> Relationship status: </p>
            <Link to={`/user/${this.props.bios.id}/about/details`}> <BioOverviewItem valName="relationship" valContent={ this.props.bios.relationship } /> </Link>
            </li>
            <li className="bio-overview-item">
              <p className="bci-header boi-headline"> Favorite quote: </p>
            <Link to={`/user/${this.props.bios.id}/about/details`}> <BioOverviewItem valName="favorite_quote" valContent={ this.props.bios.favorite_quote } /> </Link>
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

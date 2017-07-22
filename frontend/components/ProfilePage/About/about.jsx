import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import BioDetailsContainer from './BioDetail/bio_details_container'
import BioOverviewContainer from './BioDetail/bio_overview_container'
import BioPlacesContainer from './BioDetail/bio_places_container'
import BioWorkContainer from './BioDetail/bio_work_container'

class About extends React.Component {
  render() {
    return (
      <div id="about-container">
        <div className="detail-header-container">
          <div className="detail-header">
            <i className="fa fa-user"> </i>
            <h4> About </h4>
          </div>

        </div>
        <div id="about-body">
          <div id="bio-list">
            <ul>
              <li>
                <Link to="/user/about"> <p> Overview </p> </Link>

              </li>
              <li>
                <Link to="/user/about/work"> <p> Work and Education </p> </Link>
              </li>
              <li>
                <Link to="/user/about/places"> <p> Places You've lived </p> </Link>
              </li>
              <li>
                <Link to="/user/about/details"> <p> Details About You </p> </Link>
              </li>
            </ul>
          </div>
          <div id="bio-detail">
            <Switch>
              <Route path="/user/about/details" component={BioDetailsContainer}/>
              <Route path="/user/about/places" component={BioPlacesContainer}/>
              <Route path="/user/about/work" component={BioWorkContainer}/>
              <Route path="/user/about" component={BioOverviewContainer}/>
            </Switch>
          </div>
        </div>
      </div>

    )
  }
}

export default About

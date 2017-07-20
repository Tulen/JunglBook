import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import BioDetails from './BioDetail/bio_details'
import BioOverview from './BioDetail/bio_overview'
import BioPlaces from './BioDetail/bio_places'
import BioWork from './BioDetail/bio_work'

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
                <Link to="/user/about/places"> <p> Places You'ved lived </p> </Link>
              </li>
              <li>
                <Link to="/user/about/details"> <p> Details About You </p> </Link>
              </li>
            </ul>
          </div>
          <div id="bio-detail">
            <Switch>
              <Route path="/user/about/details" component={BioDetails}/>
              <Route path="/user/about/places" component={BioPlaces}/>
              <Route path="/user/about/work" component={BioWork}/>
              <Route path="/user/about" component={BioOverview}/>
            </Switch>
          </div>
        </div>
      </div>

    )
  }
}

export default About

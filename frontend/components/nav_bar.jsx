import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => (
      this.props.history.push('/')
    ))
  }

  render() {
    return(
      <div id='#nav-bar'>
        <button onClick={ this.handleSubmit }> Log Out! </button>

      </div>
    )
  }
}

export default withRouter(NavBar);

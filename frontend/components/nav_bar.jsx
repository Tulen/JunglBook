import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import FriendRequestDropdown from './friend_request_dropdown'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownHidden: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => (
      this.props.history.push('/')
    ))
  }

  toggleDropdown() {
    if (this.state.dropdownHidden) {
      this.setState({dropdownHidden: false})
    } else {
      this.setState({dropdownHidden: true})
    }
  }

  render() {
    let linkTo = ''
    if (this.props.session.currentUser !== null) {
      linkTo = this.props.session.currentUser.id
    }
    return(
      <div id='nav-bar'>

        <div className='nav-bar-left'>
          <div className="nav-logo-container">
            <Link to="/feed"><i className='fa fa-bug fa-2x'></i></Link>

          </div>

        </div>




        <div className='nav-bar-right'>
          <div className = "nav-menu-container">
            <div className="nav-btn-grp lng-2">
              <Link to={`/user/${linkTo}`}>
                <div>
                  <div className="img-container img-container-xs">
                    <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
                  </div>

                  <p> User </p>
                </div>
              </Link>


              <p> <Link to="/feed">Home</Link>  </p>
            </div>


            <div className="nav-btn-grp lng-2">
              <div className="nav-dropdowns-container">
                  <FriendRequestDropdown dropdownHidden={this.state.dropdownHidden} />
              </div>
              <i className='fa fa-group' onClick={this.toggleDropdown}>

              </i>
              <i className='fa fa-comments' ></i>
              <i className='fa fa-globe'></i>
            </div>

            <div className="nav-btn-grp lng-1">
              <i className='fa fa-question-circle'></i>
              <i className='fa fa-share-square-o' onClick={ this.handleSubmit }></i>
            </div>


          </div>
        </div>


      </div>
    )
  }
}

export default withRouter(NavBar);

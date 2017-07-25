import React from 'react'
import CreateLoginContainer from './create_login_container'
import CreateUserContainer from './create_user_container'


class LoginPage extends React.Component {

  render() {

    return (
      <div>
        <div>
          <header className="login-header">
            <div className="login-logo-container">
              <h1> JunglBook </h1>
            </div>
            <CreateLoginContainer />
          </header>
        </div>
        <div>
          <main className="login-main">
            <section className="login-main-left">
              <h2 className="login-tagline"> Connect with animals and the world around you on junglbook. </h2>
              <div className="login-list-group">
                <div>
                  <i className="fa fa-newspaper-o fa-3x"></i>
                </div>
                <div>
                  <span className="login-tagline"> See photos and updates </span> from friends in News Feed.
                </div>
              </div>
              <div className="login-list-group">
                <div>
                  <i className="fa fa-television fa-3x"></i>
                </div>
                <div>
                   <span className="login-tagline"> Share what's new </span> in your life on your Timeline.
                </div>
              </div>
              <div className="login-list-group">
                <div>
                  <i className="fa fa-search fa-3x"></i>
                </div>
                <div>
                  <span className="login-tagline"> Find more </span> of what you're looking for with JunglBook Search.
                </div>
              </div>
            </section>
            <CreateUserContainer />
          </main>
        </div>
        <footer className="login-footer">
          <div>
            <ul>
              <li>
                Justin Austria 2017:
              </li>
              <li>
                <a target="_blank" href="https://github.com/tulen"> <i className="fa fa-github-square fa-2x"> </i> </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/justin-austria-09984278/"> <i className="fa fa-linkedin-square fa-2x"> </i></a>
              </li>

            </ul>
          </div>
          <nav>
            <ul>
              <li> Sign Up </li>
              <li> Log In </li>
              <li> Mobile </li>
              <li> Find Friends </li>
              <li> Pages</li>
              <li> Help </li>
            </ul>
          </nav>
          <div>
            <li> More... </li>
          </div>
        </footer>
      </div>
    )
  }
}

export default LoginPage

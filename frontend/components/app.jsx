import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter} from 'react-router-dom';
import CreateLogin from './LoginPage/create_login'
import CreateUser from './LoginPage/create_user'

const App = () => (
  <div>
    <div>
      <header className="login-header">
        <div className="login-logo-container">
          <h1> JunglBook </h1>
        </div>
        <CreateLogin />
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
        <CreateUser />
      </main>
    </div>
    <footer className="login-footer">
      <div>
        <ul>
          <li>
            English
          </li>
          <li>
            Espanol
          </li>
          <li>
            Francais
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

export default App

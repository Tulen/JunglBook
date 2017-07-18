import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter} from 'react-router-dom';

const App = () => (
  <div>
    <header className="login-header">
      <div className="login-logo-container">
        <h1> JunglBook </h1>
      </div>
      <div className="login-form-container">
        <div className = "login-form-input">
            <p> Email </p>
            <input type="text"></input>
        </div>
        <div className = "login-form-input">
            <p> Password </p>
            <input type="text"></input>
        </div>

        <button>Log in</button>
      </div>
    </header>
    <div>
      <main className="login-main">
        <section className="login-main-left">
          <h2 className="login-tagline"> Connect with animals and the world around you on JungleBook. </h2>
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
              <span className="login-tagline"> Find more </span> of what you're looking for with Facebook Search.
            </div>
          </div>
        </section>
        <section className="login-main-right">

        </section>
      </main>
    </div>
  </div>
)

export default App

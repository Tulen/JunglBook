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
              <span className="login-tagline"> Find more </span> of what you're looking for with JunglBook Search.
            </div>
          </div>
        </section>
        <section className="login-main-right">
          <h1 className="login-tagline"> Sign Up </h1>
          <div> <h3> It's free and always will be. </h3> </div>
          <div className="signup-form">
            <form>
              <div>
                <input type="text"></input>
                <input type="text"></input>
              </div>
              <div>
                <input type="text"></input>
              </div>
              <div>
                <input type="text"></input>
              </div>
              <div>
                Birthday
                <div>
                  <select></select>
                  <select></select>
                  <select></select>
                </div>
              </div>
              <div>
                <input type="radio"></input>
                <input type="radio"></input>
                <input type="radio"></input>
              </div>
              <div>
                <p>
                  By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use. You may receive SMS Notifications from JunglBook and can opt out at any time.
                </p>
              </div>
              <div>
                <button> Create Account </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  </div>
)

export default App

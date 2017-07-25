import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Popup from 'react-popup'

class CreateLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentWillReceiveProps() {
    if (this.props.session.errors.length > 0 ) {
      this.props.receiveErrors([]);
    }
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.login({user: this.state}).then(() => (
      this.props.history.push('/feed')
    ))

  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({user: {
      email: 'leolion@animal.com',
      password: 'password'
    }}).then(() => (
      this.props.history.push('/feed')
    ))
  }

  update(val) {
    return e => this.setState({ [val]: e.target.value });
  }

  render() {

     return(
      <div className="login-form-container">
        <div className = "login-form-input">
            <p> Email </p>
            <input type="email" value={this.state.email} onChange={this.update("email")}></input>
        </div>
        <div className = "login-form-input">
            <p> Password </p>
            <input type="password" value={this.state.password} onChange={this.update("password")}></input>
        </div>

        <button onClick={this.handleSubmit}>Log in</button>
        <button onClick={this.demoLogin}>Demo</button>
        <p className="error-txt"> {this.props.session.errors}</p>
      </div>
    )
  }
}

export default CreateLogin;

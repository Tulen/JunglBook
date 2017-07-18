import React from 'react'

class CreateLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({user: this.state})
  }

  update(val) {
    return e => this.setState({ [val]: e.target.value });
  }

  render() {
     return(
      <div className="login-form-container">
        <div className = "login-form-input">
            <p> Email </p>
            <input type="text" value={this.state.email} onChange={this.update("email")}></input>
        </div>
        <div className = "login-form-input">
            <p> Password </p>
            <input type="text" value={this.state.password} onChange={this.update("password")}></input>
        </div>

        <button onClick={this.handleSubmit}>Log in</button>
      </div>
    )
  }
}

export default CreateLogin

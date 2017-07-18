import React from 'react'

class CreateLogin extends React.Component {
  render() {
     return(
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
    )
  }
}

export default CreateLogin

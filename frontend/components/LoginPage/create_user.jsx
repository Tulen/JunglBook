import React from 'react'
import { withRouter } from 'react-router-dom'

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      birthday: '',
      sex: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    let newUser = {
      user: {}
    }
    e.preventDefault();
    newUser['user'] = this.state;

    this.props.signup(newUser);
  }

  update(val) {
    return e => this.setState({ [val]: e.target.value });
  }

  render() {
     return(
       <section className="login-main-right">
         <h1 className="login-tagline"> Sign Up </h1>
         <div> <h3> It's free and always will be. </h3> </div>
         <div className="signup-form">
           <form>
             <div>
               <input type="text" value={this.state.fname} onChange={this.update('fname')} placeholder="First name"></input>
               <input type="text" value={this.state.lname} onChange={this.update('lname')} placeholder="Last name"></input>
             </div>
             <div>
               <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"></input>
             </div>
             <div>
               <input type="text" value={this.state.password} onChange={this.update('password')} placeholder="New Password"></input>
             </div>
             <div className="signup-bday-container">
               <div>
                  <h3> Birthday </h3>
               </div>
               <div>
                  <input value={this.state.birthday} onChange={this.update('birthday')} type="date"></input>
               </div>
             </div>
             <div className = "signup-sex-container">
               <label>
                  Female
                 <input type="radio" onClick={() => (this.state.sex = "female")} name="sex-choice"></input>
               </label>
               <label>
                    Male
                 <input type="radio" onClick={() => (this.state.sex = "male")} name="sex-choice"></input>
               </label>
               <label>
                  Non-Binary
                 <input type="radio" onClick={() => (this.state.sex = "non-binary")} name="sex-choice"></input>
               </label>
             </div>
             <div>
               <p>
                 By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use. You may receive SMS Notifications from JunglBook and can opt out at any time.
               </p>
             </div>
             <div>
               <button onClick={this.handleSubmit}> Create Account </button>
             </div>
           </form>
         </div>
       </section>
    )
  }
}

export default withRouter(CreateUser);

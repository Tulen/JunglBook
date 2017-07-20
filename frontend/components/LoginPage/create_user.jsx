import React from 'react'
import merge from 'lodash/merge'
import Popup from 'react-popup'

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        birthday: '',
        sex: ''
      },
      inputState: {
        fname: {
          clicked: false,
          valid: false,
          className: 'input-noerror'
        },
        lname: {
          clicked: false,
          valid: false,
          className: 'input-noerror'
        },
        email: {
          clicked: false,
          valid: false,
          className: 'input-noerror'
        },
        password: {
          clicked: false,
          valid: false,
          className: 'input-noerror'
        },
        birthday: {
          clicked: false,
          valid: false,
          className: 'input-noerror'
        },
        sex: {
          clicked: false,
          valid: false,
          className: 'input-noerror'
        }
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkValidity(val) {

    function validateEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    let newInputState = merge({}, this.state.inputState);
    return (e) => {
      newInputState[val].clicked = true;
      newInputState[val].className = 'input-noerror';
      switch (val) {
        case 'fname':
        case 'lname':
          if (e.target.value.length > 0 ) {
            newInputState[val].valid = true;
          } else {
            newInputState[val].valid = false;
            newInputState[val].className = 'input-error';
          }
          break;
        case 'email':
          if (validateEmail(e.target.value)) {
            newInputState[val].valid = true;
          } else {
            newInputState[val].valid = false;
            newInputState[val].className = 'input-error';
          }
          break;
        case 'password':
          if (e.target.value.length > 7 ) {
            newInputState[val].valid = true;
          } else {
            newInputState[val].valid = false;
            newInputState[val].className = 'input-error';
          }
          break;
        case 'birthday':
          let currentDate = new Date();
          let currentYear = 1900 + currentDate.getYear();
          let currentMonth = 1 + currentDate.getMonth();
          let currentDay = currentDate.getDate();
          let inputDate = e.target.value.split('-');
          let inputYear = parseInt(inputDate[0]);
          let inputMonth = parseInt(inputDate[1]);
          let inputDay = parseInt(inputDate[2]);
          let oldEnough = false

          if ((currentYear - inputYear) < 13) {
            if (currentYear - inputYear === 12) {
              if (currentMonth > inputMonth) {
                oldEnough = true
              } else if (currentMonth === inputMonth) {
                if ( currentDay >= inputDay ) {
                  oldEnough = true
                } else {
                  oldEnough = false
                }
              } else {
                oldEnough = false
              }
            } else {
              oldEnough = false
            }
          } else {
              oldEnough = true
          }
          if (oldEnough) {
            newInputState[val].valid = true;
          } else {
            newInputState[val].valid = false;
              newInputState[val].className = 'input-error';
          }
          break;
        default:

      }
      this.setState({ ['inputState']: newInputState });

    };
  }

  handleSubmit(e) {
    let newUser = {
      user: {}
    }
    e.preventDefault();
    newUser['user'] = this.state.user;
    this.props.signup(newUser).then(() => (
      this.props.history.push('/feed')
    ));
  }

  update(val) {

    let newUserState = merge({}, this.state.user);

    return e => {
      newUserState[val] = e.target.value;
      this.setState({ ['user']: newUserState });
    };
  }

  render() {
     return(
       <section className="login-main-right">

         <h1 className="login-tagline"> Sign Up </h1>
         <div> <h3> It's free and always will be. </h3> </div>
         <Popup closeBtn={false} closeOnOutsideClick={true}/>
         <div className="signup-form">
           <form>
             <div className="signup-form-row">
               <input className={this.state.inputState.fname.className} type="text" value={this.state.user.fname} onBlur={this.checkValidity('fname')} onChange={this.update('fname')} placeholder="First name" required></input>
               <div className={this.state.inputState.fname.className} > <i className="fa fa-warning" onClick={() => ( Popup.create(
                   {
                     title: null,
                     content:'Must provide first name',
                     buttons: {
                         left: [{
                             text: 'close',
                             className: 'danger',
                             action: function () {
                                 Popup.clearQueue();
                                 Popup.close();
                           }
                        }]
                      }
                   }
                 ))}></i> </div>
               <input className={this.state.inputState.lname.className} type="text" value={this.state.user.lname} onBlur={this.checkValidity('lname')} onChange={this.update('lname')} placeholder="Last name" required></input>

               <div className={this.state.inputState.lname.className} > <i className="fa fa-warning" onClick={() => ( Popup.create(
                   {
                     title: null,
                     content:'Must provide last name',
                     buttons: {
                         left: [{
                             text: 'close',
                             className: 'danger',
                             action: function () {
                                 Popup.clearQueue();
                                 Popup.close();
                           }
                        }]
                      }
                   }
                 ))}></i> </div>

             </div>
             <div className="signup-form-row">
               <input className={this.state.inputState.email.className} type="email" value={this.state.user.email} onBlur={this.checkValidity('email')} onChange={this.update('email')} placeholder="Email" required></input>
               <div className={this.state.inputState.email.className} > <i className="fa fa-warning" onClick={() => ( Popup.create(
                   {
                     title: null,
                     content:'Must be valid email address',
                     buttons: {
                         left: [{
                             text: 'close',
                             className: 'danger',
                             action: function () {
                                 Popup.clearQueue();
                                 Popup.close();
                           }
                        }]
                      }
                   }
                 ))}></i> </div>
             </div>
             <div className="signup-form-row">
               <input className={this.state.inputState.password.className} type="password" value={this.state.user.password} onBlur={this.checkValidity('password')} onChange={this.update('password')} placeholder="New Password" minLength="8" required></input>
               <div className={this.state.inputState.password.className} > <i className="fa fa-warning" onClick={() => ( Popup.create(
                   {
                     title: null,
                     content:'Password must be at least 8 characters',
                     buttons: {
                         left: [{
                             text: 'close',
                             className: 'danger',
                             action: function () {
                                  Popup.clearQueue();
                                  Popup.close();
                           }
                        }]
                      }
                   }
                 ))}></i> </div>
             </div>
             <div className="signup-bday-container">
               <div>
                  <h3> Birthday </h3>
               </div>
               <div className="signup-form-row">
                  <input className={this.state.inputState.birthday.className} value={this.state.user.birthday} onBlur={this.checkValidity('birthday')} onChange={this.update('birthday')} type="date" required></input>

               </div>
             </div>
             <div className = 'signup-sex-container'>
               <label className={this.state.inputState.sex.className}>
                  Female
                 <input type="radio" onClick={() => (this.state.user.sex = "female")} name="sex-choice" ></input>
               </label>
               <label className={this.state.inputState.sex.className}>
                    Male
                 <input type="radio" onClick={() => (this.state.user.sex = "male")} name="sex-choice"></input>
               </label>
               <label className={this.state.inputState.sex.className}>
                  Non-Binary
                 <input type="radio" onClick={() => (this.state.user.sex = "non-binary")} name="sex-choice"></input>
               </label>
             </div>
             <div>
               <p>
                 By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use. You may receive SMS Notifications from JunglBook and can opt out at any time.
               </p>
             </div>
             <div>
               <button className="sign-up-button" onClick={this.handleSubmit}> Create Account </button>

             </div>
           </form>

         </div>
       </section>
    )
  }
}

export default CreateUser;

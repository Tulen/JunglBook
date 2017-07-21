import React from 'react'
import merge from 'lodash/merge'
import Popup from 'react-popup'
import { values } from 'lodash'

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
    this.validationSwitch = [];
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
      let checkValue
      if (e.target === undefined) {
        checkValue = e
      } else {
        checkValue = e.target.value
      }

      if (e === '') {
        newInputState[val].valid = false;
        newInputState[val].className = 'input-error';
        this.validationSwitch.push(false);

      } else {
        switch (val) {
          case 'fname':
          case 'lname':
            if (checkValue.length > 0 ) {
              newInputState[val].valid = true;
              newInputState[val].className = 'input-noerror';
              if (e.target === undefined) {
                this.validationSwitch.push(true);
              }

            } else {
              newInputState[val].valid = false;
              newInputState[val].className = 'input-error';
              if (e.target === undefined) {
                  this.validationSwitch.push(false);
              }
            }
            break;
          case 'email':
            if (validateEmail(checkValue)) {
              newInputState[val].valid = true;
              newInputState[val].className = 'input-noerror';
              if (e.target === undefined) {
                this.validationSwitch.push(true);
              }
            } else {
              newInputState[val].valid = false;
              newInputState[val].className = 'input-error';
              if (e.target === undefined) {
                this.validationSwitch.push(false);
              }
            }
            break;
          case 'password':
            if (checkValue.length > 7 ) {
              newInputState[val].valid = true;
              newInputState[val].className = 'input-noerror';
              if (e.target === undefined) {
                this.validationSwitch.push(true);
              }
            } else {
              newInputState[val].valid = false;
              newInputState[val].className = 'input-error';
              if (e.target === undefined) {
                this.validationSwitch.push(false);
              }
            }
            break;
          case 'birthday':
            let currentDate = new Date();
            let currentYear = 1900 + currentDate.getYear();
            let currentMonth = 1 + currentDate.getMonth();
            let currentDay = currentDate.getDate();
            let inputDate = checkValue.split('-');
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
              newInputState[val].className = 'input-noerror';
              if (e.target === undefined) {
                this.validationSwitch.push(true);
              }
            } else {
              newInputState[val].valid = false;
                newInputState[val].className = 'input-error';
                if (e.target === undefined) {
                  this.validationSwitch.push(false);
                }
            }
            break;
          default:
        }
      }

      this.setState({ ['inputState']: newInputState });
      // console.log(this.validationSwitch);


    };
  }

  handleSubmit(e) {
    let newUser = {
      user: {}
    }
    e.preventDefault();

    Object.keys(this.state.user).forEach( (val) => {
      if (val !== "sex") {
        this.checkValidity(val)(this.state.user[val]);
      }

    })
    let newSubmitInputState = merge({}, this.state.inputState)

    let indexCounter = 0;
    this.validationSwitch.forEach((bool) => {
      if (bool){
        switch (indexCounter) {
          case 0:
            newSubmitInputState.fname.className = "input-noerror";
            break;
          case 1:
            newSubmitInputState.lname.className = "input-noerror";
            break;
          case 2:
            newSubmitInputState.email.className = "input-noerror";
            break;
          case 3:
            newSubmitInputState.password.className = "input-noerror";
            break;
          case 4:
            newSubmitInputState.birthday.className = "input-noerror";
            break;
          default:

          }
        } else {
            switch (indexCounter) {
              case 0:
                newSubmitInputState.fname.className = "input-error";
                break;
              case 1:
                newSubmitInputState.lname.className = "input-error";
                break;
              case 2:
                newSubmitInputState.email.className = "input-error";
                break;
              case 3:
                newSubmitInputState.password.className = "input-error";
                break;
              case 4:
                newSubmitInputState.birthday.className = "input-error";
                break;
              default:
              }
            }
        indexCounter++;
      }
    );
    this.setState({ ['inputState']: newSubmitInputState });
    this.validationSwitch = [];
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
         <div> <h3> Humans welcome too! </h3> </div>
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
                    <div className={this.state.inputState.birthday.className} > <i className="fa fa-warning" onClick={() => ( Popup.create(
                        {
                          title: null,
                          content:'You must be at least 13 to use JungleBook',
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

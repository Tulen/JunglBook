# JunglBook

[JunglBook live][heroku]

[heroku]:https://junglbook.herokuapp.com

JunglBook is a Facebook-inspired social networking application for animals.

## Technologies

 Tech description here: Redux, react, Ruby on Rails, PostgreSQL.

## Features

### Front and Back End User Authentication

This is handled on the backend through the use of BCrypt and session tokens. When a user is not logged in they are redirected to the login page.

### Synchronous Client Side Form Field Validation

![Synchronous client-side field validation](/app/assets/gifs/sign-up.gif)

Each form field runs a validation check (checkValidity) on blur. Taking email as an example, a function is defined to check the validity of the current value of the input field. Based on whether or not the field is valid, a function is run to update the class (which determines whether or not errors should be rendered).

``` JavaScript
// Select code from checkValidity function

function validateEmail(email) {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

function setErrorClass(bool, val) {
  if (bool) {
    newInputState[val].valid = true;
    newInputState[val].className = "input-noerror";
    if (e.target === undefined) {
      this.validationSwitch.push(true);
    }
  } else {
    newInputState[val].valid = false;
    newInputState[val].className = "input-error";
    if (e.target === undefined) {
        this.validationSwitch.push(false);
    }
  }
}

// Inside a switch  

case 'email':
  setErrorClass(validateEmail(checkValue), val);
  break;

  ```
On signup form submit, a validation check is run on each of the input fields, which as a side effect also stores into an array a collection of booleans that represent the validity state of each input field (this.validationSwitch). This array then determines whether an error class should be set on a given input field.

``` JavaScript

// Select code from function that runs on signup form submission

Object.keys(this.state.user).forEach( (val) => {
  if (val !== "sex") {
    this.checkValidity(val)(this.state.user[val]);
  }

})

let newSubmitInputState = merge({}, this.state.inputState)
const inputFields = ["fname", "lname", "email", "password", "birthday"]


function setSubmitErrorClass(bool, string) {
  if (bool) {
    newSubmitInputState[string].className = "input-noerror";
  } else {
    newSubmitInputState[string].className = "input-error";
  }
}

this.validationSwitch.forEach((bool, idx) => {
  setSubmitErrorClass(bool, inputFields[idx]);
  }
);

```

### User Profiles

### Friending

### Posts and Comments

![Post Comment Demo](/app/assets/gifs/post-comments.gif)

JunglBook allows users to post on their profile pages and the profile pages of their friends. Users are also able to comment on these posts and reply to these comments as well. Both comments and posts are editable and deletable by their authors.
### Profile Pictures, Cover Photos, Photo Upload

### Moving Forward

Features planned for future implementation include:

+ User Search
+ Loading
+ Likes
+ Notifications
+ Direct Messaging
+ Photo Albums

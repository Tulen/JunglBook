import React from 'react'

class CreateUser extends React.Component {
  render() {
     return(
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
    )
  }
}

export default CreateUser

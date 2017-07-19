import React from 'react'
import NavBarContainer from '../nav_bar_container'

class ProfilePage extends React.Component {
  render() {
     return(
       <div>
         <NavBarContainer />

         <div id="prof-header-container">
           <div id="prof-cvr-photo">
             <div id="prof-pic">
               <img src="https://pbs.twimg.com/media/DBF7FLLVYAAaJDX.jpg" />
             </div>
              <h2> Quokka </h2>
           </div>
           <div id="prof-headline">

           </div>
         </div>
       </div>

    )
  }
}

export default ProfilePage

//coverphoto height: 205px 851w
//headline height: 34px 851w
//profile pic 168x168

import React from 'react'
import { Link } from 'react-router-dom'

class IntroWidgetItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    if (this.props.valContent === null || this.props.valContent === '') {
      if (this.props.bios.id == this.props.session.currentUser.id) {
        switch (this.props.valName) {
          case "current city":
          case "hometown":
            return <Link to={`/user/${this.props.session.currentUser.id}/about/places`}><p> Add {this.props.valName} </p> </Link>
          case "work":
          case "education":
            return <Link to={`/user/${this.props.session.currentUser.id}/about/work`}><p> Add {this.props.valName} </p> </Link>
          case "favorite quote":
          case "relationship status":
            return <Link to={`/user/${this.props.session.currentUser.id}/about/details`}><p> Add {this.props.valName} </p> </Link>
          default:
            return <Link to={`/user/${this.props.session.currentUser.id}/about/`}><p> Add {this.props.valName} </p> </Link>
        }
      } else {
        return <p className="filler-text" > n/a </p>
      }

    } else {
      return (
       <p> {this.props.valContent} </p>
      )
    }


  }
}

export default IntroWidgetItem

import React from 'react'

class BioOverviewItem extends React.Component {
  constructor(props) {
    super(props)
    console.log("BOIITEM", props)
  }
  render() {
    if (this.props.valContent === "" || this.props.valContent === null) {
      if (this.props.canEdit) {
        return (
          <div className="boi-container">
            <div> <i className="fa fa-plus"> </i> </div>
            Add {this.props.valName}
          </div>
        )
      } else {
        return <p className="filler-text"> n/a </p>
      }

    } else {
      return (
        <div className="bio-content bc-overview">
          <h4> {this.props.valContent} </h4>
          <p> Click to edit </p>
        </div>
      )
    }

  }
}

export default BioOverviewItem

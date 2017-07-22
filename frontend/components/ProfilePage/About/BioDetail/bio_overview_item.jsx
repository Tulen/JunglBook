import React from 'react'

class BioOverviewItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.valContent === "" || this.props.valContent === null) {
      return (
        <div className="boi-container">
          <div> <i className="fa fa-plus"> </i> </div>
          Add {this.props.valName}
        </div>
      )
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

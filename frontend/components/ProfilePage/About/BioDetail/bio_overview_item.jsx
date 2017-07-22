import React from 'react'

class BioOverviewItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="boi-container">
        <div> <i className="fa fa-plus"> </i> </div>
        Add {this.props.valName}
      </div>
    )
  }
}

export default BioOverviewItem

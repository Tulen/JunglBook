import React from 'react'
// import IntroWidgetItem from './intro_widget_item'

class IntroWidget extends React.Component {
  constructor(props) {
    super(props)
    console.log("INTRO WIDGET", props)
  }
  render() {
    return (
      <div className="prof-subcomponent" id="intro-widget">
        <div className="prof-subcomponent-header">
          <div className="prof-subcomponent-icon-container">
            <i className="fa fa-globe"></i>
          </div>
          Intro
        </div>
        <ul className="intro-widget-list">
          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-birthday-cake"> </i>
              <p> {this.props.bios.birthday} </p>

            </div>
          </li>
          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-graduation-cap"> </i>
              <p> {this.props.bios.education} </p>

            </div>
          </li>
          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-graduation-cap"> </i>
              <p> Sample Intro Widget Text </p>

            </div>
          </li>
        </ul>

      </div>
    )
  }
}

export default IntroWidget

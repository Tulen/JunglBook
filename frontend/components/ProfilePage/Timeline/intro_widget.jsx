import React from 'react'
import IntroWidgetItem from './intro_widget_item'

class IntroWidget extends React.Component {
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
          <li> <IntroWidgetItem /> </li>
          <li> <IntroWidgetItem /> </li>
          <li> <IntroWidgetItem /> </li>
        </ul>

      </div>
    )
  }
}

export default IntroWidget

import React from 'react'
import IntroWidgetItemContainer from './intro_widget_item_container'

class IntroWidget extends React.Component {
  constructor(props) {
    super(props);
    // console.log("INTROWIDGET", props);
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
              <p> Birthday: </p>
              <p> {this.props.bios.birthday} </p>

            </div>
          </li>

          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-building"> </i>
              <p> Current city: </p>
              <IntroWidgetItemContainer valName={"current city"} valContent={this.props.bios.current_city} />
            </div>
          </li>

          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-home"> </i>
              <p> Hometown </p>
              <IntroWidgetItemContainer valName={"hometown"} valContent={this.props.bios.hometown} />

            </div>
          </li>
          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-briefcase"> </i>
              <p> Works at: </p>
              <IntroWidgetItemContainer valName={"work"} valContent={this.props.bios.work} />
            </div>
          </li>
          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-graduation-cap"> </i>
              <p> Studied at: </p>
              <IntroWidgetItemContainer valName={"education"} valContent={this.props.bios.education} />

            </div>
          </li>
          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-heart"> </i>
              <p> Relationship status: </p>
              <IntroWidgetItemContainer valName={"relationship status"} valContent={this.props.bios.relationship} />

            </div>
          </li>

          <li>
            <div className="intro-widget-list-item">
              <i className="fa fa-book"> </i>
              <p> Favorite quote: </p>
              <IntroWidgetItemContainer valName={"favorite quote"} valContent={this.props.bios.favorite_quote} />
            </div>
          </li>

        </ul>

      </div>
    )
  }
}

export default IntroWidget

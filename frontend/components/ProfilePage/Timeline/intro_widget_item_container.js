import { connect } from 'react-redux';
import IntroWidgetItem from './intro_widget_item';

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

export default connect(
  mapStateToProps
)(IntroWidgetItem);

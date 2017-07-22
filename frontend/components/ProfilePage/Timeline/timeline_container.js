import { connect } from 'react-redux';
import Timeline from './timeline';

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

export default connect(
  mapStateToProps
)(Timeline);

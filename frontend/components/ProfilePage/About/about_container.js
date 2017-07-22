import { connect } from 'react-redux';
import About from './about';

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

export default connect(
  mapStateToProps
)(About);

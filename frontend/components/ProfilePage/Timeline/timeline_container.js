import { connect } from 'react-redux';
import Timeline from './timeline';

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: id => dispatch(fetchUserPhotos(id))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Timeline);

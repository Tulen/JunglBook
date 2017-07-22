import { connect } from 'react-redux';
import BioPlaces from './bio_places';

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

export default connect(
  mapStateToProps
)(BioPlaces);

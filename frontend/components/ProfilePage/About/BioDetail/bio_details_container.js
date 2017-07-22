import { connect } from 'react-redux';
import BioDetails from './bio_details';

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

export default connect(
  mapStateToProps
)(BioDetails);

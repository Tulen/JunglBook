import { connect } from 'react-redux';
import BioWork from './bio_work';

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

export default connect(
  mapStateToProps
)(BioWork);

import { connect } from 'react-redux';
import BioOverview from './bio_overview';

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

export default connect(
  mapStateToProps
)(BioOverview);

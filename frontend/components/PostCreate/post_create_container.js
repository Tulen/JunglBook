import { connect } from 'react-redux';
import PostCreate from './post_create';

const mapStateToProps = ( { session, bios } ) => ({
  session,
  bios
})

export default connect(
  mapStateToProps
)(PostCreate);

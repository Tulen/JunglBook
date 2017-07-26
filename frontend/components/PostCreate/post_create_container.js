import { connect } from 'react-redux';
import PostCreate from './post_create';

const mapStateToProps = ( { session, bios, friends } ) => ({
  session,
  bios,
  friends
})

export default connect(
  mapStateToProps
)(PostCreate);

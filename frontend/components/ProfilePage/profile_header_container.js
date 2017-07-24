import { connect } from 'react-redux';
import ProfileHeader from './profile_header'
import { withRouter } from 'react-router'

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})



export default withRouter(connect(
  mapStateToProps
)(ProfileHeader));

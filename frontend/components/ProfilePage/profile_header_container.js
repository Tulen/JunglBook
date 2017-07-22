import { connect } from 'react-redux';
import ProfileHeader from './profile_header'
import { withRouter } from 'react-router'

const mapStateToProps = ( state ) => ({
  state
})



export default withRouter(connect(
  mapStateToProps
)(ProfileHeader));

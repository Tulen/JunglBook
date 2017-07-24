import { connect } from 'react-redux';
import ProfileHeader from './profile_header'
import { withRouter } from 'react-router'

const mapStateToProps = ( {bios, session, friendRequests} ) => ({
  bios,
  session,
  friendRequests
})

const mapDispatchToProps = dispatch => ({
  sendUserRequest: (req) => dispatch(sendUserRequest(req)),
  removeUserRequest: (id, req) => dispatch(removeUserRequest(id, req))
})


export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ProfileHeader));

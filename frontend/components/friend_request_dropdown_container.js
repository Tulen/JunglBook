import { connect } from 'react-redux';
import FriendRequestDropdown from './friend_request_dropdown'
import { fetchUserRequests } from '../actions/friend_requests_actions'

const mapStateToProps = ( { session, friendRequests } ) => ({
  session,
  friendRequests
})

const mapDispatchToProps = dispatch => ({
  fetchUserRequests: () => dispatch(fetchUserRequests())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequestDropdown);

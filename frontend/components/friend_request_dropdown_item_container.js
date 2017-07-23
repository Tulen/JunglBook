import { connect } from 'react-redux';
import FriendRequestDropdownItem from './friend_request_dropdown_item'
import { acceptUserRequest, removeUserRequest } from '../actions/friend_requests_actions'

const mapStateToProps = ( { session, friendRequests } ) => ({
  session,
  friendRequests
})

const mapDispatchToProps = dispatch => ({
  acceptUserRequest: (id, request) => dispatch(acceptUserRequest(id, request)),
  removeUserRequest: (id, request) => dispatch(removeUserRequest(id, request))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequestDropdownItem);

import { connect } from 'react-redux';
import FriendWidget from './friend_widget';
import { fetchUserFriends } from '../../../actions/friends_actions'
import {withRouter} from 'react-router'

const mapStateToProps = ( {bios, session, friendRequests, friends} ) => ({
  bios,
  session,
  friendRequests,
  friends
})

const mapDispatchToProps = dispatch => ({
  fetchUserFriends: id => dispatch(fetchUserFriends(id))
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(FriendWidget));

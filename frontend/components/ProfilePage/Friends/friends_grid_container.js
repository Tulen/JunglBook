import { connect } from 'react-redux';
import FriendsGrid from './friends_grid'
import { fetchUserFriends } from '../../../actions/friends_actions'


const mapStateToProps = ( { bios, friendRequests } ) => ({
  bios,
  friendRequests
})

const mapDispatchToProps = dispatch => ({
  fetchUserFriends: id => dispatch(fetchUserFriends(id))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(FriendsGrid);

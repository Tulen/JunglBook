import { connect } from 'react-redux';
import FriendsGrid from './friends_grid'
import { fetchUserFriends } from '../../../actions/friends_actions'
import { fetchUserBio } from '../../../actions/bios_actions'
import { withRouter } from 'react-router'


const mapStateToProps = ( { bios, friendRequests, friends } ) => ({
  bios,
  friendRequests,
  friends
})

const mapDispatchToProps = dispatch => ({
  fetchUserFriends: id => dispatch(fetchUserFriends(id)),
  fetchUserBio: id => dispatch(fetchUserBio(id))
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(FriendsGrid));

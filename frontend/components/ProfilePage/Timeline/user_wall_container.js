import { connect } from 'react-redux';
import UserWall from './user_wall'
import { fetchUserPosts } from '../../../actions/posts_actions'

const mapStateToProps = ( { session, posts } ) => ({
  session,
  posts
})

const mapDispatchToProps = dispatch => ({
  fetchUserPosts: (id) => dispatch(fetchUserPosts(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserWall);

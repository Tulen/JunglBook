import { connect } from 'react-redux';
import UserPostDropdown from './user_post_dropdown'
import { deleteUserPost } from '../../actions/posts_actions'

const mapStateToProps = ( { session, posts } ) => ({
  session,
  posts
})

const mapDispatchToProps = dispatch => ({
  deleteUserPost: (id) => dispatch(deleteUserPost(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostDropdown);

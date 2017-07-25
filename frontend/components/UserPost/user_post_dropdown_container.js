import { connect } from 'react-redux';
import UserPostDropdown from './user_post_dropdown'
import { deleteUserPost, editUserPost } from '../../actions/posts_actions'

const mapStateToProps = ( { session, posts } ) => ({
  session,
  posts
})

const mapDispatchToProps = dispatch => ({
  deleteUserPost: (id) => dispatch(deleteUserPost(id)),
  editUserPost: (id, post) => dispatch(editUserPost(id, post))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostDropdown);

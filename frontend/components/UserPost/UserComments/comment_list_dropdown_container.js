import { connect } from 'react-redux';
import CommentListDropdown from './comment_list_dropdown'
import { deleteComment, editComment } from '../../../actions/comments_actions'

const mapStateToProps = ( { session, comments } ) => ({
  session,
  comments
})

const mapDispatchToProps = dispatch => ({
  deleteComment: (id) => dispatch(deleteComment(id)),
  editComment: (id, comment) => dispatch(editComment(id, comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListDropdown);

import { connect } from 'react-redux';
import CommentForm from './comment_form'
import { createComment } from '../../../actions/comments_actions'

const mapStateToProps = ( { session, bios, comments } ) => ({
  session,
  bios,
  comments
})

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

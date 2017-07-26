import { connect } from 'react-redux';
import CommentList from './comment_list'
import { fetchPostComments } from '../../../actions/comments_actions'

const mapStateToProps = ( { session, bios, comments } ) => ({
  session,
  bios,
  comments
})

const mapDispatchToProps = dispatch => ({
  fetchPostComments: (id) => dispatch(fetchPostComments(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);

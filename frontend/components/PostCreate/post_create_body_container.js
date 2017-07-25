import { connect } from 'react-redux';
import PostCreateBody from './post_create_body';
import { createUserPost } from '../../actions/posts_actions'
import {withRouter} from 'react-router'

const mapStateToProps = ( {session, bios} ) => ({
  session,
  bios
})

const mapDispatchToProps = dispatch => ({
  createUserPost: post => dispatch(createUserPost(post))
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(PostCreateBody));

import { connect } from 'react-redux';
import NewsFeedList from './news_feed_list'
import { fetchUserPosts } from '../../actions/posts_actions'

const mapStateToProps = ( { session, bios, posts } ) => ({
  session,
  bios,
  posts
})

const mapDispatchToProps = dispatch => ({
  fetchUserBio: (id) => dispatch(fetchUserBio(id)),
  fetchUserPosts: (id) => dispatch(fetchUserPosts(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedList);

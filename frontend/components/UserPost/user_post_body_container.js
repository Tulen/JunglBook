import { connect } from 'react-redux';
import UserPostBody from './user_post_body'


const mapStateToProps = ( { session } ) => ({
  session
})



export default connect(
  mapStateToProps
)(UserPostBody);

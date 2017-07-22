import { connect } from 'react-redux';
import ProfilePage from './profile_page'
import { fetchUserBio } from '../../actions/bios_actions'
import { withRouter } from 'react-router'

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

const mapDispatchToProps = dispatch => ({
  fetchUserBio: (id) => dispatch(fetchUserBio(id))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage));

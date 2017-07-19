import { connect } from 'react-redux';
import NavBar from './nav_bar'
import { logout } from '../actions/session_actions'

const mapStateToProps = ( { errors } ) => ({
  errors
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

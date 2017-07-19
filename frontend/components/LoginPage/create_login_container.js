import { connect } from 'react-redux';
import CreateLogin from './create_login'
import { login } from '../../actions/session_actions'

const mapStateToProps = ( { session } ) => ({
  session
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLogin);

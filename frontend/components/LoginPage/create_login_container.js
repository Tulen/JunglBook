import { connect } from 'react-redux';
import CreateLogin from './create_login'
import { login, receiveErrors } from '../../actions/session_actions'

const mapStateToProps = ( { session } ) => ({
  session
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLogin);

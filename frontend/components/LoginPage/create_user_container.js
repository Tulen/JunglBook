import { connect } from 'react-redux';
import CreateUser from './create_user'
import { signup } from '../../actions/session_actions'

const mapStateToProps = ( { errors } ) => ({
  errors
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);

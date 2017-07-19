import { connect } from 'react-redux';
import CreateUser from './create_user'
import { signup } from '../../actions/session_actions'
import { withRouter } from 'react-router'

const mapStateToProps = ( { errors } ) => ({
  errors
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser));

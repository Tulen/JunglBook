import { connect } from 'react-redux';
import Photos from './photos';
import { uploadPhoto } from '../../../actions/photos_actions'
import {withRouter} from 'react-router'

const mapStateToProps = ( {session} ) => ({
  session
})

const mapDispatchToProps = dispatch => ({
  uploadPhoto: photo => dispatch(uploadPhoto(photo))
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(Photos));

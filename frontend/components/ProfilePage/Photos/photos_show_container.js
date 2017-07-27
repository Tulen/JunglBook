import { connect } from 'react-redux';
import PhotosShow from './photos_show';
import { updateUserPhoto } from '../../../actions/bios_actions'
import {withRouter} from 'react-router'

const mapStateToProps = ( {bios, session, photos} ) => ({
  bios,
  session,
  photos
})

const mapDispatchToProps = dispatch => ({
  updateUserPhoto: (id, bios) => dispatch(updateUserPhoto(id, bios))
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(PhotosShow));

import { connect } from 'react-redux';
import PhotosShow from './photos_show';
import { updateUserBio } from '../../../actions/bios_actions'
import {withRouter} from 'react-router'

const mapStateToProps = ( {bios, session, photos} ) => ({
  bios,
  session,
  photos
})

const mapDispatchToProps = dispatch => ({
  updateUserBio: (id, bios) => dispatch(updateUserBio(id, bios))
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(PhotosShow));

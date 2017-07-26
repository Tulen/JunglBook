import { connect } from 'react-redux';
import PhotosGrid from './photos_grid';
import { fetchUserPhotos } from '../../../actions/photos_actions'
import {withRouter} from 'react-router'

const mapStateToProps = ( {bios, session, photos} ) => ({
  bios,
  session,
  photos
})

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: id => dispatch(fetchUserPhotos(id))
})

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(PhotosGrid));

import { connect } from 'react-redux';
import BioFormItem from './bio_form_item';
import { updateUserBio } from '../../../../actions/bios_actions'

const mapStateToProps = ( {bios, session} ) => ({
  bios,
  session
})

const mapDispatchToProps = dispatch => ({
  updateUserBio: (id, bios) => dispatch(updateUserBio(id, bios))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(BioFormItem);

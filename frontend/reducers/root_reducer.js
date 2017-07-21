import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BiosReducer from './bios_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bios: BiosReducer
})

export default RootReducer

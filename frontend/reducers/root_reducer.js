import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BiosReducer from './bios_reducer';
import FriendRequestsReducer from './friend_requests_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bios: BiosReducer,
  friendRequests: FriendRequestsReducer
})

export default RootReducer

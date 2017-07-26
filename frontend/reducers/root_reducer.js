import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BiosReducer from './bios_reducer';
import FriendRequestsReducer from './friend_requests_reducer';
import FriendsReducer from './friends_reducer';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bios: BiosReducer,
  friendRequests: FriendRequestsReducer,
  friends: FriendsReducer,
  posts: PostsReducer,
  comments: CommentsReducer
})

export default RootReducer

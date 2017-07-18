# API Endpoints

## HTML API

### Root

- `GET /`
  - loads React

## JSON API

### Users

- `POST /api/users`
  - create new user
- `DELETE /api/users`
  - delete user account

### Session

- `POST /api/session`
  - log in user
- `DELETE /api/session`
  - log out user

### Bios

- `GET /api/bios`
  - gets all bio information of a certain user
- `PATCH /api/users/:user_id/bios/id`
  - update certain user bio information

### FriendRequests

- `GET /api/users/:user_id/friends`
  - gets all friends of a certain user
- `POST /api/friends`
  - create new friend request
- `PATCH /api/friends`
  - accept/reject friend request
- `DELETE /api/users/:user_id/friends/:id`
  - unfriend a user

### Posts

- `GET /api/users/:user_id/posts`
  - get all posts of a certain user
- `GET /api/posts/:id`
  - get specific post
- `POST /api/posts`
  - create post
- `PATCH /api/posts/:id`
  - edit post
- `DELETE /api/posts/:id`
  - remove post


### Comments

- `GET /api/comments/:id`
  - get specific comment
- `POST /api/comments`
  - create comment
- `PATCH /api/comments/:id`
  - edit comment
- `DELETE /api/comments/:id`
  - remove comment

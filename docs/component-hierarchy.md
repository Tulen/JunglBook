## Component Hierarchy

**LoginPage**
  - UserLogin
  - UserCreate

**ProfilePage**
  - ProfileHeader
  - IntroWidget
  - PhotoWidget
  - FriendWidget
  - PostCreate
  - UserWall
    - UserPost
      - PostMain
      - CommentList
        - CommentListItem
      - NewComment

**NewsFeed**
  - PostCreate
  - NewsFeedList
    - UserPost
      - PostMain
      - CommentList
        - CommentListItem
      - NewComment

**About**
  - ProfileHeader
  - BioList
  - BioDetail

**Friends**
  - ProfileHeader
  - FriendGrid
    - FriendGridItem

**Photos**
  - ProfileHeader
  - PhotoGrid
    - PhotoGridItem

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "LoginPage" |
| "/users/feed" | "NewsFeed" |
| "/users/:userId" | "ProfilePage" |
| "/users/:userId/about" | "About" |
| "/users/:userId/friends" | "Friends" |
| "/users/:userId/photos" | "Photos" |

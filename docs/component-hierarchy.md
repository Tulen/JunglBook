## Component Hierarchy

**LoginPage**
  - UserLogin
  - UserCreate

**ProfilePage**
  - NavBar
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
  - NavBar
  - PostCreate
  - NewsFeedList
    - UserPost
      - PostMain
      - CommentList
        - CommentListItem
      - NewComment

**About**
  - NavBar
  - ProfileHeader
  - BioList
  - BioDetail

**Friends**
  - NavBar
  - ProfileHeader
  - FriendGrid
    - FriendGridItem

**Photos**
  - NavBar
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

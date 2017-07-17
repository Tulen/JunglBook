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
| "/feed" | "NewsFeed" |
| "/:user" | "ProfilePage" |
| "/:user/about" | "About" |
| "/:user/friends" | "Friends" |
| "/:user/photos" | "Photos" |

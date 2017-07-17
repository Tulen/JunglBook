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

**NewsFeed**
  - PostCreate
  - NewsFeedList

**Friends**
  - ProfileHeader
  - FriendGrid

**Photos**
  - ProfileHeader
  - PhotoGrid

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "LoginPage" |
| "/feed" | "NewsFeed" |
| "/:user" | "ProfilePage" |
| "/:user/friends" | "Friends" |
| "/:user/photos" | "Photos" |

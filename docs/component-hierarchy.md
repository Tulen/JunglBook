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

**About**
  - ProfileHeader
  - BioList
  - BioDetail

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
| "/:user/about" | "About" |
| "/:user/friends" | "Friends" |
| "/:user/photos" | "Photos" |

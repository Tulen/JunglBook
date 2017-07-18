```js
{
  currentUser: {
    id: 1,
    username: "name"
  },
  forms: {
    userCreate: {errors: []},
    userLogin: {errors: []},
    postCreate: {errors: ["body can't be blank"]}
  },
  posts: {
    1: {
      body: "body",
      author_id: 1,
    }
  },
  comments: {
    1: {
      id: 1,
      author_id: 5,
      body: "body"
    }
  },
  friends: {
    1: {
      id: 1,
      author_id: 5,
      body: "body"
    }
  },
  photos: {
    1: {
      id: 1,
      owner_id: 5,
      image_url: "./image.png"
    }
  },
  friend_requests: {
    1: {
      id: 1,
      sender_id: 1,
      recipient_id: 3,
      accepted: false
    }
  }
}
```

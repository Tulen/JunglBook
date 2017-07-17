```js
{
  currentUser: {
    id: 1,
    username: "name"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPost: {errors: ["body can't be blank"]}
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
  friend_requests: {
    1: {
      id: 1,
      user_id: 1,
      friend_id: 3,
      accepted: false
    }
  }
}
```

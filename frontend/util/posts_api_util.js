export const createUserPost = post => {
  return $.ajax({
    method: "POST",
    url: "api/posts",
    data: post
  })
}

export const fetchUserPosts = id => {
  return $.ajax({
    method: "GET",
    url: "api/posts",
    data: {id}
  })
}

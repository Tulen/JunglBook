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

export const deleteUserPost = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/posts/${id}`
  })
}

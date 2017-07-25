export const createUserPost = post => {
  $.ajax({
    method: "POST",
    url: "api/posts",
    data: post
  })
}

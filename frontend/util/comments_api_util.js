export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: "api/comments",
    data: comment
  })
}

export const fetchPostComments = id => {
  return $.ajax({
    method: "GET",
    url: "api/comments",
    data: {id}
  })
}

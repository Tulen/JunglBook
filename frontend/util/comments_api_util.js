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

export const deleteComment = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  })
}

export const editComment = (id, comment) => {
  return $.ajax({
    method: "PATCH",
    url: `api/comments/${id}`,
    data: { comment }
  })
}

export const fetchUserRequests = id => {
  return $.ajax({
    method: 'GET',
    url: `api/friend_requests/${id}`,
    data: id
  })
};


export const sendUserRequest = request => {
  return $.ajax({
    method: 'POST',
    url: `api/friend_requests/`,
    data: request
  })
};

export const acceptUserRequest = (id, request) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/friend_requests/${id}`,
    data: request
  })
}

export const removeUserRequest = (id, request) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/friend_requests/${id}`,
    data: request
  })
}

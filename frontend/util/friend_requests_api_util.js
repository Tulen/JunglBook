export const fetchUserRequests = id => {
  return $.ajax({
    method: 'GET',
    url: `api/friend_requests/${id},`,
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

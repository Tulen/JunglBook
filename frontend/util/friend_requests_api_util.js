export const fetchUserRequests = id => {
  return $.ajax({
    method: 'GET',
    url: `api/friend_requests/${id}`
  })
};

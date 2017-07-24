export const fetchUserFriends = id => {
  return $.ajax({
    method: 'GET',
    url: `api/friends`,
    data: {id}
  })
};

export const fetchUserFriends = id => {
  console.log("IDDIDIDIDD", id)
  return $.ajax({
    method: 'GET',
    url: `api/friends`,
    data: {id}
  })
};

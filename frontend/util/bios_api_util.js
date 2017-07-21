export const fetchUserBio = id => {
  return $.ajax({
    method: 'GET',
    url: `api/bios/${id}`
  })
};

export const fetchUserBio = id => {
  return $.ajax({
    method: 'GET',
    url: `api/bios/${id}`
  })
};

export const updateUserBio = (id, bios) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/bios/${id}`,
    data: bios
  })
};

export const fetchProfilePic = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/profile_photos/profile`,
    data: { id }
  })
}

export const updateProfilePic = (id, photo) => {
  return $.ajax({
    method: "PATCH",
    url: `api/profile_photos/cover`,
    data: { id, photo }
  })
}

export const fetchCoverPhoto = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/profile_photos/profile/update`,
    data: { id }
  })
}

export const updateCoverPhoto = (id, photo) => {
  return $.ajax({
    method: "PATCH",
    url: `api/profile_photos/cover/update`,
    data:  { id, photo }
  })
}

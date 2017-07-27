export const uploadPhoto = photo => {
  return $.ajax({
    method: "POST",
    url: "api/photos",
    data: photo
  })
}

export const fetchUserPhotos = id => {
  return $.ajax({
    method: "GET",
    url: "api/photos",
    data: {id}
  })
}

export const deletePhoto = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/photos/${id}`
  })
}

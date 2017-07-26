@photos.each do |photo|
  json.set! photo.id do
    json.id photo.id
    json.img_url photo.img_url
    json.owner_id photo.owner_id
    json.is_profile photo.is_profile
    json.is_cover photo.is_cover
  end

end

@photos.each do |photo|
  json.set! photo.id do
    json.id photo.id
    json.owner_id photo.owner_id
    json.is_profile photo.is_profile
  end

end

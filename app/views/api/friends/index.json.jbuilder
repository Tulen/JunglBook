@requests.each do |request|
  json.set! request.id do
    json.sender_id request.sender_id
    json.recipient_id request.recipient_id
    json.sender_fname request.sender.fname
    json.sender_lname request.sender.lname
    json.sender_profile request.sender.profile_url
    json.recipient_fname request.recipient.fname
    json.recipient_lname request.recipient.lname
    json.recipient_profile request.recipient.profile_url
    json.status request.status
  end

end

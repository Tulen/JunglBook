@requests.each do |request|
  json.set! request.id do
    json.id request.id
    json.sender_id request.sender.id
    json.recipient_id request.recipient_id
    json.status request.status
    json.sender_fname request.sender.fname
    json.sender_lname request.sender.lname
  end

end

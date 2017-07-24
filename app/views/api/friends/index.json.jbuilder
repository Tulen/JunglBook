@requests.each do |request|
  json.set! request.id do
    json.sender_id request.sender_id
    json.recipient_id request.recipient_id
    json.sender_fname request.sender.fname
    json.sender_lname request.sender.lname
    json.recipient_fname request.recipient.fname
    json.recipient_lname request.recipient.lname
    json.status request.status
  end

end

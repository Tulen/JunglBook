json.extract! @request, :id, :sender_id, :recipient_id, :status
json.sender_fname @sender.fname
json.sender_lname @sender.lname

json.extract! @request, :id, :sender_id, :recipient_id, :status
json.sender_fname @sender.fname
json.sender_lname @sender.lname


# @request.sender.each do |sender|
#   json.set! sender.id
#     json.fname sender.fname
#     json.lname sender.lname
# end
# @request.recipient.each do |recipient|
#   json.set! recipient.id
#     json.fname recipient.fname
#     json.lname recipient.lname
# end

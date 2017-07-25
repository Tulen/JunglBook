json.extract! @request, :id, :sender_id, :recipient_id, :status
json.extract! @sender, :fname, :lname


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

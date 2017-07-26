@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.author_id comment.author_id
    json.post_id comment.post_id
    json.parent_id comment.parent_id
    json.body comment.body
    json.author_fname comment.author.fname
    json.author_lname comment.author.lname
    json.post_date comment.created_at.strftime("%b %d, %Y")
    json.edit_date comment.updated_at.strftime("%b %d, %Y")
    json.edited (comment.created_at != comment.updated_at)
  end

end

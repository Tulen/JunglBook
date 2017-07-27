@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.author_id comment.author_id
    json.author_profile comment.author.profile_url
    json.post_id comment.post_id
    json.parent_id comment.parent_id
    json.body comment.body
    json.author_fname comment.author.fname
    json.author_lname comment.author.lname
    json.created_at comment.created_at
    json.updated_at comment.updated_at
    json.edited (comment.created_at != comment.updated_at)
  end

end

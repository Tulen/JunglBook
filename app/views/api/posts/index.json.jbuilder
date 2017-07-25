@posts.each do |post|
  json.set! post.id do
    json.id post.id
    json.author_id post.author_id
    json.body post.body
    json.author_fname post.author.fname
    json.author_lname post.author.lname
    json.post_date post.created_at.strftime("%b %d, %Y")
    json.edit_date post.updated_at.strftime("%b %d, %Y")
    json.edited (post.created_at != post.updated_at)
  end

end

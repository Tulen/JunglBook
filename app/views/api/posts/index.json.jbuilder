@posts.each do |post|
  json.set! post.id do
    json.id post.id
    json.author_id post.author_id
    json.body post.body
    json.author_fname post.author.fname
    json.author_lname post.author.lname
  end

end

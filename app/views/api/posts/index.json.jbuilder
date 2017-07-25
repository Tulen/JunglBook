@posts.each do |post|
  json.set! post.id do
    json.id post.id
    json.author_id post.author_id
    json.body post.body
  end

end

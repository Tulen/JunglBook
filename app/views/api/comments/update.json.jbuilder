json.extract! @comment, :id, :body, :author_id, :post_id, :parent_id

json.author_fname @comment.author.fname
json.author_lname @comment.author.lname
json.author_profile @comment.author.profile_url
json.created_at @comment.created_at
json.updated_at @comment.updated_at
json.edited (@comment.created_at != @comment.updated_at)

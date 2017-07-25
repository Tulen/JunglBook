json.extract! @post, :id, :body, :author_id, :wall_id

json.author_fname @post.author.fname
json.author_lname @post.author.lname
json.wall_fname @post.wall.fname
json.wall_lname @post.wall.lname
json.post_date @post.created_at.strftime("%b %d, %Y")
json.edit_date @post.updated_at.strftime("%b %d, %Y")
json.edited (@post.created_at != @post.updated_at)

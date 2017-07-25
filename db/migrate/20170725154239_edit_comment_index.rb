class EditCommentIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :comments, :author_id
    add_index :comments, :author_id
    remove_index :comments, :parent_id
    add_index :comments, :parent_id
    remove_index :comments, :post_id
    add_index :comments, :post_id
  end
end

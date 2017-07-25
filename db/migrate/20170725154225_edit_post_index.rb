class EditPostIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :posts, :author_id
    add_index :posts, :author_id
  end
end

class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
    end

    add_index :posts, :author_id, unique: true
  end
end

class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.integer :parent_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :comments, :author_id, unique: true
    add_index :comments, :post_id, unique: true
    add_index :comments, :parent_id, unique: true
  end


end

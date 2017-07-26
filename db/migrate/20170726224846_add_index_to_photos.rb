class AddIndexToPhotos < ActiveRecord::Migration[5.1]
  def change
    add_index :photos, :owner_id
  end
end

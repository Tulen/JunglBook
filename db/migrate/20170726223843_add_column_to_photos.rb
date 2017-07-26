class AddColumnToPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :is_cover, :boolean 
  end
end

class ChangePhotosColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :photos, :is_cover, :boolean, default: false, null: false
  end
end

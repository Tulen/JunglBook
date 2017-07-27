class AddPhotosToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile_url, :text
    add_column :users, :cover_url, :text 
  end
end

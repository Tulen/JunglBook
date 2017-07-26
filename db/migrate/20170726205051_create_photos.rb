class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :owner_id, null: false
      t.text :img_url, null: false
      t.boolean :is_profile, null: false, default: false
      t.timestamps
    end
  end
end

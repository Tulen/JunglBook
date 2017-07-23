class FriendRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :friend_requests do |t|
      t.integer :sender_id, null: false
      t.integer :recipient_id, null: false
      t.string :status, null: false, default: "PENDING"

      t.timestamps
    end
    add_index :friend_requests, [:sender_id, :recipient_id], unique: true
  end
end

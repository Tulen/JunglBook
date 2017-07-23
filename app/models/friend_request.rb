class FriendRequest < ApplicationRecord
  validates :sender, :recipient, null: false

  belongs_to :sender,
    primary_key: :sender_id,
    foreign_key: :id,
    class_name: :User

  belongs_to :recipient,
    primary_key: :recipient_id,
    foreign_key: :id,
    class_name: :User


end

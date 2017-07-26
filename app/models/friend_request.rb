# == Schema Information
#
# Table name: friend_requests
#
#  id           :integer          not null, primary key
#  sender_id    :integer          not null
#  recipient_id :integer          not null
#  status       :string           default("PENDING"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class FriendRequest < ApplicationRecord
  validates :sender, :recipient, null: false

  belongs_to :sender,
    primary_key: :id,
    foreign_key: :sender_id,
    class_name: :User

  belongs_to :recipient,
    primary_key: :id,
    foreign_key: :recipient_id,
    class_name: :User


end

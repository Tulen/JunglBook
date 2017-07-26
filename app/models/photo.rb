class Photo < ApplicationRecord
  validates :owner, :img_url, :is_profile, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User
end

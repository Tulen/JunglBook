# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  body       :text             not null
#  created_at :datetime
#  updated_at :datetime
#  wall_id    :integer          not null
#

class Post < ApplicationRecord
  validates :author, :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :wall,
    primary_key: :id,
    foreign_key: :wall_id,
    class_name: :User

  has_many :comments
end

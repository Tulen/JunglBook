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

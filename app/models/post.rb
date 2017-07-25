class Post < ApplicationRecord
  validates :author, :body, presence: true
  validates :author, uniqueness: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments
end

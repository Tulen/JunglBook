class Comment < ApplicationRecord
  validates :author, :parent, :post, :body, presence: true
  validates :author, :parent, :post, uniqueness: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

  belongs_to :parent,
    primary_key: :id,
    foreign_key: :parent_id,
    class_name: :Comment

  has_many :children,
    primary_key: :id,
    foreign_key: :parent_id,
    class_name: :Comment
end

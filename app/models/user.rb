# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  birthday        :date             not null
#  sex             :string           not null
#  work            :string
#  education       :string
#  current_city    :string
#  hometown        :string
#  relationship    :string
#  nickname        :string
#  favorite_quote  :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, :fname, :lname, :birthday, :sex, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 8, allow_nil: true}

  validates_date :birthday, :before => lambda { 13.years.ago },
                            :before_message => "must be at least 13 years old to use JungleBook"

  before_validation :ensure_session_token

  attr_reader :password

  has_many :sent_requests,
    primary_key: :id,
    foreign_key: :sender_id,
    class_name: :FriendRequest

  has_many :received_requests,
    primary_key: :id,
    foreign_key: :recipient_id,
    class_name: :FriendRequest

  has_many :authored_posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post

  has_many :received_posts,
    primary_key: :id,
    foreign_key: :wall_id,
    class_name: :Post

  has_many :comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Comment

  has_many :photos,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Photo


  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end

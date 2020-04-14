class Article < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :body, :title, :image, presence: true
end

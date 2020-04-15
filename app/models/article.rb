class Article < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :body, :title, :image, presence: true

  def self.search(search)
    return Article.all unless search
    Article.where('body LIKE(?)', "%#{search}%")
  end
end

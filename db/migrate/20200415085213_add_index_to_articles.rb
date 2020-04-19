class AddIndexToArticles < ActiveRecord::Migration[5.2]
  def change
    add_index :articles, :title, length: 32
  end
end

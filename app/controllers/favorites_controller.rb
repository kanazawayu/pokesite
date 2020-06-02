class FavoritesController < ApplicationController
  before_action :set_article, only: [:create, :destroy]

  def index
    @article = Article.all
    @favorite = Favorite.where(user_id: current_user.id)
    # @articles = @article.favorites.where(user_id: current_user.id)
    # @article = article.where.not(user_id: current_user.id)
  end

  def create
    @favorite = Favorite.create(user_id: current_user.id, article_id: @article.id)
  end

  def destroy
    @favorite = Favorite.find_by(user_id: current_user.id, article_id: @article.id)
    @favorite.destroy
  end

  private
  def set_article
    @article = Article.find(params[:article_id])
  end
end

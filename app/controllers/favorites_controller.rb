class FavoritesController < ApplicationController
  before_action :set_article, only: [:create, :destroy]
  before_action :move_to_index, only: [:index]

  def index
    user = User.find(current_user.id)
    @name = user.name
    @articles = Article.all.page(params[:page]).per(5).order("created_at DESC")
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

  def move_to_index
    redirect_to root_path unless user_signed_in?
  end
end

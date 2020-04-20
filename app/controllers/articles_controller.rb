class ArticlesController < ApplicationController
  before_action :move_to_index, except: [:index, :show]
  before_action :set_article, only: [:destroy, :edit, :update, :show]
  
  def index
    @articles = Article.includes(:user).order("created_at DESC").page(params[:page]).per(5)
  end

  def new
    @article = Article.new
  end

  def create
    Article.create(article_params)
  end

  def destroy
    article.destroy
  end

  def edit
  end

  def update
    article.update(article_params)
  end

  def show
    @comment = Comment.new
    @comments = @article.comments.includes(:user)
  end

  private
  def article_params
    params.require(:article).permit(:title, :body).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

  def set_article
    @article = Article.find(params[:id])
  end
end

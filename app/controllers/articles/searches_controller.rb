class Articles::SearchesController < ApplicationController
  def index
    @articles = Article.search(params[:keyword])
  end
end

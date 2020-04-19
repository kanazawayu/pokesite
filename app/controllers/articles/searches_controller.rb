class Articles::SearchesController < ApplicationController
  def index
    @articles = Article.search(params[:keyword]).order("created_at DESC")
    respond_to do |format|
      format.html
      format.json
    end
  end
end

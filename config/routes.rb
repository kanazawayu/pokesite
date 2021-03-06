Rails.application.routes.draw do
  root "articles#index"
  devise_for :users
  namespace :articles do
    resources :searches, only: :index
  end
  resources :articles do
    resources :comments, only: :create
    resources :favorites , only: [:create, :destroy]
  end
  resources :damages, only: :index
  resources :users, only: :show
  resources :favorites, only: :index
end

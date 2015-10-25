Rails.application.routes.draw do
  namespace :api do
  get 'tags/index'
  end

  root to: "static_pages#index"

  namespace :api, defaults: { format: :json} do 
    resources :comments, only: [:create, :destroy] 
    resources :questions
    resources :tags, only: [:index, :create]
    resources :answers, only: [:update, :create, :destroy] 
    resources :question_upvotes, only: [:create, :destroy] 
  end
  

  resources :users, only: [:new, :create, :show, :update]
  resource :session, only: [:new, :create, :destroy]
end

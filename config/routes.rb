Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json} do 
    resources :questions
    resources :answers, only: [:update, :create, :destroy] 
  end
  

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
end

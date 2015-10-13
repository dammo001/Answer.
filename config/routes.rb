Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json} do 
    resources :questions
  end
  

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end

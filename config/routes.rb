Rails.application.routes.draw do
  resources :usercoins, only: [:index, :show, :destroy, :create, :update]
  # do you need to oustide in route this (nested) to say do, coins, etc?
  resources :users
  resources :coins

  #sessions routes
  get '/login', to: 'sessions#login'
  post 'login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  get "/me", to: "users#show"
  get '/test', to: 'sessions#test'
  # Defines the root path route ("/")
  # root "articles#index"
end

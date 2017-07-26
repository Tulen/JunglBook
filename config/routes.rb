Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :bios, only: [:show, :update]
    resources :friend_requests, only: [:index, :create, :update, :destroy]
    resources :friends, only: [:index]
    resources :posts, only: [:index, :create, :update, :destroy]
    resources :comments, only: [:index, :create, :update, :destroy]
    resources :photos, only: [:index, :create, :update, :destroy]

  end

  get '/api/friend_requests', to: 'api/friend_requests#friends', defaults: {format: :json}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

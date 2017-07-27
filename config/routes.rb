Rails.application.routes.draw do

  root "static_pages#root"

  get '/api/profile_photos/profile', to: 'api/profile_photos#profile', defaults: {format: :json}
  get '/api/profile_photos/cover', to: 'api/profile_photos#cover', defaults: {format: :json}
  get '/api/profile_photos/profile/update', to: 'api/profile_photos#profile_update', defaults: {format: :json}
  get '/api/profile_photos/cover/update', to: 'api/profile_photos#cover_update', defaults: {format: :json}

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


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

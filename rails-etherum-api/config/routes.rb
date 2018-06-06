Rails.application.routes.draw do
  devise_for :users, skip: [:sessions, :registrations, :passwords]

  namespace :api, defaults: { format: :json } do
    get '/users/:id', to: "users#show"

    devise_scope :user do
      # get    'users/auth/facebook/:id',           to:  'omniauth_callbacks#passthru'
      # post   'users/auth/facebook/:id',           to:  'omniauth_callbacks#passthru'
      # get    'users/auth/facebook/callback/:id',  to:  'omniauth_callbacks#facebook'
      # post   'users/auth/facebook/callback/:id',  to:  'omniauth_callbacks#facebook'
      post   'auth/login',                    to: 'sessions#create'
      delete 'auth/logout',                   to: 'sessions#delete'
      post   'auth/users',                    to: 'registrations#create'
      delete 'auth/users/:id',                to: 'registrations#delete'
      patch  'auth/users/:id',                to: 'registrations#update'
      get    'auth/contracts',                to: 'contracts#index'
      get    'auth/contracts/:blockchain_id', to: 'contracts#show'
    end
  end
end

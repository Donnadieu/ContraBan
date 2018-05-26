Rails.application.routes.draw do
  devise_for :users, skip: [:sessions, :registrations, :passwords]

  namespace :api, defaults: { format: :json } do
    get '/users', to: "users#index"

    devise_scope :user do
      post   'auth/login',     to: 'sessions#create'
      delete 'auth/logout',    to: 'sessions#delete'
      post   'auth/users',     to: 'registrations#create'
      delete 'auth/users/:id', to: 'registrations#delete'
      patch  'auth/users/:id', to: 'registrations#update'
    end
  end
end

Rails.application.routes.draw do
  devise_for :users, skip: [:sessions, :registrations, :passwords]

  namespace :v1, defaults: { format: :json } do
    get '/users', to: "users#index"

    devise_scope :user do
      get    'auth/login',     to: 'devise/sessions#new',    to: 'sessions#new'
      post   'auth/login',     to: 'devise/sessions#create', to: 'sessions#create'
      delete 'auth/logout',    to: 'devise/sessions#destroy'
      post   'auth/users',     to: 'devise/registrations#create'
      delete 'auth/users/:id', to: 'devise/registrations#destroy'
      patch  'auth/users/:id', to: 'devise/registrations#update'
      put    'auth/users/:id', to: 'devise/registrations#update'
      get    'auth/users/:id', to: 'devise/registrations#edit'
    end
  end
end

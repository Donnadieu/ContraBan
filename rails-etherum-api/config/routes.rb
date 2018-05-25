Rails.application.routes.draw do

  namespace :v1, defaults: { format: :json } do
    devise_for :users,
           path: '',
           path_names: {
             sign_in: 'auth/login',
             sign_out: 'auth/logout',
             registration: 'auth/signup',
             password: 'auth/password'
           }
  end
end

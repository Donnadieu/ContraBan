class Api::UsersController < ApplicationController
  acts_as_token_authentication_handler_for User, fallback: :exception

  def index
    render json: User.all
  end

end

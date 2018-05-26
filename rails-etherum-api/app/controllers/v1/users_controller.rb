class V1::UsersController < ApplicationController
  acts_as_token_authentication_handler_for User, fallback: :exception

  def index
    @users = User.all

    render json: @users
  end
end

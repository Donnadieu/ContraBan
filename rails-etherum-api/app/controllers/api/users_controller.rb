class Api::UsersController < ApplicationController
  # acts_as_token_authentication_handler_for User, fallback: :exception
  before_action :set_user
  def index
    render json: User.all
  end
end

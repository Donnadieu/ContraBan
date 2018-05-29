class Api::UsersController < ApplicationController
  acts_as_token_authentication_handler_for User, fallback: :exception
  before_action :set_user
  def show
    render json: @user.as_json(only: [:id, :email])
  end
end

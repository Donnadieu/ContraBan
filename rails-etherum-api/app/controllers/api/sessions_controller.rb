class Api::SessionsController < ApplicationController
  acts_as_token_authentication_handler_for User, except: [:create]

  def create
    @user = User.find_by(email: params[:email])

    if @user&.valid_password?(params[:password])
      renew_authentication_token!
      render json: @user.as_json(only: [:id, :email, :authentication_token]), status: 200
    else
      render json: @user.errors, status: 401
    end
  end

  def delete
    renew_authentication_token!
  end

  private
    def renew_authentication_token!
      @user.authentication_token = nil
      @user.save
    end
end

class Api::SessionsController < ApplicationController
  acts_as_token_authentication_handler_for User, except: [:create]


  def create
    if @user&.valid_password?(params[:user][:password])
      renew_authentication_token!
      render json: @user.as_json(only: [:id, :email, :authentication_token]), status: 200
    else
      render json: @user.errors, status: 401
    end
  end

  def delete
    renew_authentication_token!
    render json:{ message: "You have been logged out"}, status: 200
  end

  private
    def renew_authentication_token!
      @user.authentication_token = nil
      @user.save
    end
end

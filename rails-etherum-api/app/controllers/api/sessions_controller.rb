class Api::SessionsController < ApplicationController
  acts_as_token_authentication_handler_for User, except: [:create]


  def create
    @contracts = Contract.all

    if !!@user && @user.valid_password?(params[:user][:password])
      renew_authentication_token!
      render json: {
        user: @user.as_json(only: [:id, :email, :authentication_token], include: [:contracts]), status: 200,
        contracts: @contracts.as_json
      }
    else
      if @user == nil
        render json:{ message: "User does not exist or Invalid Credentials"}, status: 401
      else
        render json: @user.errors, status: 401
      end
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

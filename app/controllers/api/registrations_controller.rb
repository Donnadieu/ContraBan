class Api::RegistrationsController < ApplicationController
  acts_as_token_authentication_handler_for User, fallback: :exception, except: [:create]
  before_action :set_user

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
      return
    else
      warden.custom_failure!
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @user.id === params[:id].to_i
      if @user.update(user_params) && !params[:user][:password].empty?
        render json: @user.as_json(only: [:id, :email, :authentication_token])
        return
      else
        warden.custom_failure!
        render json:{ message: "Wrong parameters"}, status: :unprocessable_entity
      end
    else
      render json:{ message: "Unable to perform this action"}, status: 401
    end
  end

  def delete
    if @user.id === params[:id].to_i
      @user.destroy
    else
      render json:{ message: "Unable to perform this action"}, status: 401
    end
  end

  private

    def user_params
      # {"user": {"email": "hello@email.com", "password": "12345678"} }
      params.require(:user).permit(:id, :email, :password)
    end
end

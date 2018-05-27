class Api::RegistrationsController < ApplicationController
  acts_as_token_authentication_handler_for User, fallback: :exception, except: [:create]
  before_action :set_user

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user.as_json(only: [:id, :email, :authentication_token]), status: :created
      return
    else
      warden.custom_failure!
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def delete
    if @user.id === params[:id]
      @user.destroy
    else
      render json:{ message: "Could not perform the action"}
    end
  end

  private

    def user_params
      # {"user": {"email": "hello@email.com", "password": "12345678"} }
      params.require(:user).permit(:id, :email, :password)
    end
end

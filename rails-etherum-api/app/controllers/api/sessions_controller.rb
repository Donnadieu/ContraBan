class Api::SessionsController < Devise::SessionsController
  acts_as_token_authentication_handler_for User, fallback: :exception, except: [:create]

  def create
    @user = User.find_by(email: params[:user][:email])

    if @user&.valid_password?(params[:user][:password])
      renew_authentication_token!
      render json: @user.as_json(only: [:email, :authentication_token]), status: 200
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    def renew_authentication_token!
      current_user.authentication_token = nil
      current_user.save
    end
end

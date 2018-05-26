class V1::SessionsController < Devise::SessionsController
  acts_as_token_authentication_handler_for User, fallback: :exception, except: [:create]

  def create
    @user = User.find_by(email: params[:user][:email])

    if @user&.valid_password?(params[:user][:password])
      render json: @user.as_json(only: :email), status: 200
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

end

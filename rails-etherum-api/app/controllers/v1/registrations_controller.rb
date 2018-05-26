class V1::RegistrationsController < Devise::RegistrationsController
  acts_as_token_authentication_handler_for User, fallback: :exception, except: [:create]
  
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
      return
    else
      warden.custom_failure!
      render json: @user.errors, status: :unprocessable_entity
    end

  end

  private

    def user_params
      params.require(:user).permit(:email, :password)
    end
end

class Api::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  acts_as_token_authentication_handler_for User, fallback: :exception, except: [:facebook]
  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.from_omniauth(request.env["omniauth.auth"])
    if @user.persisted?
      sign_in_and_redirect @user, event: :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, kind: "Facebook") if is_navigational_format?
      wallet = Wallet.find_or_create_by(address: Wallet.create_address, user_id: current_user.id)
      Coin.find_or_create_by(wallet_id: wallet.id)
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to '/'
  end
end

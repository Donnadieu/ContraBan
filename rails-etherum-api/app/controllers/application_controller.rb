
class ApplicationController < ActionController::API
  acts_as_token_authentication_handler_for User, fallback: :exception
  respond_to :json
  before_action :set_user

  private

    def resource_name
     :user
    end

    def current_user
      current_user = User.find_by(email: request.headers['X-User-Email'])
    end

    def set_user
      @user = User.find_by(email: params[:user][:email])
    end
end

class ApplicationController < ActionController::API
  before_action :authenticate_v1_user!
  acts_as_token_authentication_handler_for User, fallback: :none

  respond_to :json
end

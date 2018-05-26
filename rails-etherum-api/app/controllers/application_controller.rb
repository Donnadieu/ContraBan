class ApplicationController < ActionController::API  
  respond_to :json

  private

    def resource_name
     :user
    end
end

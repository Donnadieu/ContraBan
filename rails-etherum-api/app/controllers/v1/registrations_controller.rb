class V1::RegistrationsController < Devise::RegistrationsController

  private

    def resource_name
     :user
    end
end

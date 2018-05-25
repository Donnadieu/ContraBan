class V1::RegistrationsController < Devise::RegistrationsController

  private
    # def user_params
    #  params.require(:user).permit(:email, :password)
    # end

    def resource_name
     :user
    end
end

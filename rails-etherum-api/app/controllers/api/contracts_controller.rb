class Api::ContractsController < ApplicationController
  acts_as_token_authentication_handler_for User
  skip_before_action :set_user
  def index
    @contracts = Contract.all
    render json: @contracts.as_json(except: [:histories]), status: 200
  end

  def create
    binding.pry
  end

  private
    def contract_parmas
      params.require(:contract).permit(:product_name, :product_info, :image)
    end
end

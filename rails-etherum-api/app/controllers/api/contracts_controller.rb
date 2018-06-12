class Api::ContractsController < ApplicationController
  acts_as_token_authentication_handler_for User
  skip_before_action :set_user
  def index
    @contracts = Contract.all
    render json: @contracts.as_json(except: [:histories]), status: 200
  end

  def create
    @contract = Contract.new(contract_parmas)
    @contract.blockchain_id = Faker::Bitcoin.address

    if @contract.save
      current_user.contracts << @contract
      render json: @contract, status: :created
    else
      render json: @contract.errors, status: :unprocessable_entity
    end
  end

  private
    def contract_parmas
      params.permit(:product_name, :product_info, :image)
    end
end

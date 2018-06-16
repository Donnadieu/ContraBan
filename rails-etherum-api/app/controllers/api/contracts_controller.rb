class Api::ContractsController < ApplicationController
  acts_as_token_authentication_handler_for User
  skip_before_action :set_user
  def index
    @contracts = Contract.all
    render json: @contracts.as_json(except: [:histories, :image], methods: :price), status: 200
  end

  def create
    @contract = Contract.new(contract_parmas)
    @contract.blockchain_id = Faker::Bitcoin.address
    if @contract.save
      @history = History.create(user_id: current_user.id, contract_id: @contract.id, transfer_price: params[:price].to_f)
      render json: @contract, status: :created
    else
      binding.pry
      render json: @contract.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @current_owner = User.find_by(email: params[:owner][:email])
    @new_owner = User.find_by(email: params[:new_owner][:email])

    if params[:new_owner][:email]
      if @new_owner
        @contract = Contract.find_by(blockchain_id: params[:blockchain_id])
        History.create(user_id: @new_owner.id, contract_id: @contract.id, transfer_price: params[:contract][:price])
        render json: @current_owner, status: 200
      else
        @new_owner = User.create(email: params[:owner][:email], password: Devise.friendly_token.first(8))
        @contract = Contract.find_by(blockchain_id: params[:blockchain_id])
        History.create(user_id: @new_owner.id, contract_id: @contract.id, transfer_price: params[:contract][:price])
        render json: @current_owner, status: 200
      end
    else
      render json:{ message: "Email cannot be blank"}, status: :unprocessable_entity
    end

  end

  private
    def contract_parmas
      params.permit(:product_name, :product_info, :image, :price)
    end
end

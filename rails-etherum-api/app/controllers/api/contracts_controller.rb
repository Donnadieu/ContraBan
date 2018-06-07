class Api::ContractsController < ApplicationController
  skip_before_action :set_user
  def index
    @contracts = Contract.all
    render json: @contracts, status: 200
  end

  def show

  end
end

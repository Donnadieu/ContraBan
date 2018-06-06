class Api::ContractsController < ApplicationController
  skip_before_action :set_user
  def index
    @contracts = Contract.all
    render json: @contracts.to_json(), status: 200
  end
end

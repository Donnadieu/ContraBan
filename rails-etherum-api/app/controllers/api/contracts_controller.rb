class Api::ContractsController < ApplicationController
  skip_before_action :set_user
  def index
    @contracts = Contract.all
    render json: @contracts.as_json(except: [:histories]), status: 200
  end

  def create

  end
end

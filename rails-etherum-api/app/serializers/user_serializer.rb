class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :authentication_token
   has_many :current_contracts, each_serializer: ContractSerializer

  def current_contracts
    object.contracts.find_all{ |contract| contract.current_owner == object.id }
  end
end

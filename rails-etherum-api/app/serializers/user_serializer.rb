class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :authentication_token
   has_many :current_contracts, each_serializer: ContractSerializer
end

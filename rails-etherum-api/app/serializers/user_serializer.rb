class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :authentication_token, :current_contracts
end

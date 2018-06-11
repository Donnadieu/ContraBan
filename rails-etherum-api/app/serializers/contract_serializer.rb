class ContractSerializer < ActiveModel::Serializer
  attributes :id, :blockchain_id, :product_name, :product_info, :histories, :image
  has_many :histories
end

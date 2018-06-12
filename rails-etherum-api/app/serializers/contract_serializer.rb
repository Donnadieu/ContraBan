class ContractSerializer < ActiveModel::Serializer
  attributes :id, :blockchain_id, :created_at, :product_name, :product_info, :histories, :image
  has_many :histories
end

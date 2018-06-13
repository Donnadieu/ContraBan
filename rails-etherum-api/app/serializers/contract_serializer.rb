class ContractSerializer < ActiveModel::Serializer
  attributes :id, :blockchain_id, :created_at, :product_name, :product_info, :price, :histories, :image
  has_many :histories

  def price
    object.histories.last.price
  end

end

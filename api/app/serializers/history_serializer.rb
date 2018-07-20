class HistorySerializer < ActiveModel::Serializer
  attributes :user_id, :contract_id, :transfer_price, :created_at
  belongs_to :user
  belongs_to :contract
end

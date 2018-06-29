class AddLikesToContracts < ActiveRecord::Migration[5.1]
  def change
    add_column :contracts, :likes, :integer, default: 0
  end
end

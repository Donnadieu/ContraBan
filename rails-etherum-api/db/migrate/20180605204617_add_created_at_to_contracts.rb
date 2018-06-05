class AddCreatedAtToContracts < ActiveRecord::Migration[5.1]
  def change
    add_column :contracts, :created_at, :datetime
  end
end

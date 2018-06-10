class AddImageToContracts < ActiveRecord::Migration[5.1]
  def change
    add_column :contracts, :image, :string
  end
end

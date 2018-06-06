class AddAttributesToContracts < ActiveRecord::Migration[5.1]
  def change
    add_column :contracts, :product_name, :string
    add_column :contracts, :product_info, :string
    add_column :contracts, :image, :string
  end
end

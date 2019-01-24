class RemoveImageFromContracts < ActiveRecord::Migration[5.1]
  def change
    remove_column :contracts, :image, :string
  end
end

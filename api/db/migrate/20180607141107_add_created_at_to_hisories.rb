class AddCreatedAtToHisories < ActiveRecord::Migration[5.1]
  def change
    add_column :histories, :created_at, :datetime
  end
end

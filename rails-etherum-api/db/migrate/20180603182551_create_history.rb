class CreateHistory < ActiveRecord::Migration[5.1]
  def change
    create_table :histories do |t|
      t.integer :user_id
      t.integer :contract_id
      t.integer :price
    end
  end
end

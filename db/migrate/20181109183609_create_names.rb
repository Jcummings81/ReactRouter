class CreateNames < ActiveRecord::Migration[5.2]
  def change
    create_table :names do |t|
      t.string :description
      t.string :department
      t.float :price

      t.timestamps
    end
  end
end

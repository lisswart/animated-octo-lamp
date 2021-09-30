class CreateTimers < ActiveRecord::Migration[6.1]
  def change
    create_table :timers do |t|
      t.integer :duration
      t.references :category, null: false, foreign_key: true
      t.references :task, null: false, foreign_key: true
      t.references :preference, null: false, foreign_key: true

      t.timestamps
    end
  end
end
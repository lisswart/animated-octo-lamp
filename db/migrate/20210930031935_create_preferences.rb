class CreatePreferences < ActiveRecord::Migration[6.1]
  def change
    create_table :preferences do |t|
      t.integer :session_length
      t.integer :break_length
      t.integer :long_break_length
      t.boolean :enable_long_break
      t.integer :no_of_sessions_before_long_break
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class Preference < ApplicationRecord
  belongs_to :user
  has_many :timers
  has_many :tasks, through: :timers
  has_many :categories, through: :timers
end

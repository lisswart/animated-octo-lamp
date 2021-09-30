class Task < ApplicationRecord
  has_many :timers
  has_many :categories, -> { distinct }, through: :timers
end

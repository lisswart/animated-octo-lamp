class Category < ApplicationRecord
  has_many :timers
  has_many :tasks, -> { distinct }, through: :timers
end

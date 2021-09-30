class Preference < ApplicationRecord
  belongs_to :user
  has_many :timers
end

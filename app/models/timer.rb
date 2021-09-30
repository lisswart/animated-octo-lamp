class Timer < ApplicationRecord
  belongs_to :category
  belongs_to :task
  belongs_to :preference
end

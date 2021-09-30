# puts "seeding users..."

# 3.times do User.create(
#   firstname: Faker::Name.first_name,
#   lastname: Faker::Name.last_name,
#   username: Faker::Twitter.unique.screen_name,
#   email: Faker::Internet.unique.email,
#   password_digest: Faker::Internet.unique.password
#   )
# end

# puts "done seeding users..."

# puts "seeding preferences..."

# Preference.create(
#   session_length: 25,
#   break_length: 5,
#   enable_long_break: true,
#   long_break_length: 15,
#   no_of_sessions_before_long_break: 3,
#   user_id: 3
# )

# puts "done seeding preferences..."

# puts "seeding tasks..."

# Task.create(
#   task_name: "first reading"
# )

# Task.create(
#   task_name: "second reading"
# )

# Task.create(
#   task_name: "take notes"
# )

# Task.create(
#   task_name: "practice recall"
# )

# puts "done seeding tasks..."

# puts "seeding categories..."

# Category.create(
#   category_label: "JavaScript"
# )

# Category.create(
#   category_label: "Ruby"
# )

# Category.create(
#   category_label: "React"
# )

# Category.create(
#   category_label: "Rails"
# )

# Category.create(
#   category_label: "Golang"
# )

# puts "done seeding categories..."

# puts "seeding timers..."

# 6.times do Timer.create(
#   duration: 25,
#   category_id: 1,
#   task_id: 1,
#   preference_id: 1
#   )
# end

# puts "done seeding timers..."
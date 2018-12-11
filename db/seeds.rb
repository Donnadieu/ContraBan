# # # # This file should contain all the record creation needed to seed the database with its default values.
# # # # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# # # #
# # # # Examples:
# # # #
# # # #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# # # #   Character.create(name: 'Luke', movie: movies.first)
# @user = User.last
# @user_second = User.first
#
# 10.times do
#   @user.contracts.create(
#     product_name: "Title",
#     product_info: "Details",
#     blockchain_id: Faker::Bitcoin.address
#   )
# end
#
# 10.times do
#   @user_second.contracts.create(
#     product_name: "Title",
#     product_info: "Details",
#     blockchain_id: Faker::Bitcoin.address
#   )
# end

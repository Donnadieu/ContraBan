class Contract < ApplicationRecord
   has_many :histories
   has_many :users, through: :histories

   def current_owner
    self.histories.last.user_id
   end
end

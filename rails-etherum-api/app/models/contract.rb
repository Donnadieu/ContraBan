class Contract < ApplicationRecord
   has_many :histories
   has_many :users, through: :histories

   def current_owner
    self.histories.last.user_id
   end

   def current_owner=(current_owner)
     self.histories.last.update(user_id: current_owner)
   end
end

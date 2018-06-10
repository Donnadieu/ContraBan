class Contract < ApplicationRecord
   has_many :histories
   has_many :users, through: :histories
   mount_uploader :avatar, ImageUploader

   def current_owner
    self.histories.last.user_id
   end
end

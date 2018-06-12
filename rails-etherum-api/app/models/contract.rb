class Contract < ApplicationRecord
  has_many :histories
  has_many :users, through: :histories
  validates :product_name, presence: true
  validates :product_info, presence: true
  validates :image, presence: true
  mount_uploader :image, ImageUploader

   def current_owner
    self.histories.last.user_id
   end
end

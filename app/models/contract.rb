class Contract < ApplicationRecord
  has_many :histories
  has_many :users, through: :histories
  validates :product_name, presence: true
  validates :product_info, presence: true
  validate :name_and_info_cannot_be_undfeined

  mount_uploader :image, ImageUploader

   def current_owner
    self.histories.last.user_id
   end

   def price
     self.histories.last.transfer_price
   end

   def name_and_info_cannot_be_undfeined
     if product_info == "undefined" || product_name == "undefined"
       errors.add(:product_info, "cannot be blank or named undfeined")
       errors.add(:product_name, "cannot be blank or named undfeined")
     end
   end
end

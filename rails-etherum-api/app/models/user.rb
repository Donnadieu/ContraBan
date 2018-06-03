class User < ApplicationRecord
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable
   validates :email, uniqueness: true
   validates :email, presence: true

   has_many: :histories
   has_many :contracts, through: :histories

end

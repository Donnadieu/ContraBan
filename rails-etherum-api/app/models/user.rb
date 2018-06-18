class User < ApplicationRecord
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable
   validates :email, uniqueness: true
   validates :email, presence: true
   validates :password, length: { minimum: 7 }
   validates_format_of :email,with: Devise::email_regexp

   has_many :histories
   has_many :contracts, through: :histories

   def current_contracts
     Contract.all.find_all{ |contract| contract.current_owner == id }
   end
end

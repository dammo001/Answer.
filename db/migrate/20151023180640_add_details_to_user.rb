class AddDetailsToUser < ActiveRecord::Migration
  def change
  	add_column :users, :email, :string
  	add_column :users, :bio, :text 
  	add_column :users, :tagline, :string, default: "User Extraordinaire" 
  end
end

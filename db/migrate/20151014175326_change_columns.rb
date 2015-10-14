class ChangeColumns < ActiveRecord::Migration
  def change
  	rename_column :questions, :author_id, :user_id
  	rename_column :answers, :author_id, :user_id 
  end
end

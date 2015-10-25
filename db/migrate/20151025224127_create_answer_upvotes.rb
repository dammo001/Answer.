class CreateAnswerUpvotes < ActiveRecord::Migration
  def change
    create_table :answer_upvotes do |t|
		t.integer :value, null: false 
    	t.integer :user_id, null: false 
    	t.integer :answer_id, null: false 

      t.timestamps null: false
    end
    add_index :answer_upvotes, [:user_id, :answer_id], unique: true 
  end
end

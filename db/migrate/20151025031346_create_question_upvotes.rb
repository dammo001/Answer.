class CreateQuestionUpvotes < ActiveRecord::Migration
  def change
    create_table :question_upvotes do |t|
    	t.integer :value, null: false 
    	t.integer :user_id, null: false 
    	t.integer :question_id, null: false 

      t.timestamps null: false
    end
    add_index :question_upvotes, [:user_id, :question_id], unique: true 
  end
end

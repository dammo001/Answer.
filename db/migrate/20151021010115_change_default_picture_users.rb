class ChangeDefaultPictureUsers < ActiveRecord::Migration
  def change
  	change_column_default(:users, :picture_url, "http://res.cloudinary.com/djp2nuknn/image/upload/v1445034090/user_photos/va4gyig8agjmnj4eqaue.jpg")
  end
end

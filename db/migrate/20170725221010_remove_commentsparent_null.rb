class RemoveCommentsparentNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :comments, :parent_id, true
  end
end

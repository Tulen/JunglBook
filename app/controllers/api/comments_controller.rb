class Api::CommentsController < ApplicationController

  def index
    @post = Post.find(params[:id])
    @comments = @post.comments

    render :index
  end

  def show
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/create'
    else
      render []
    end
  end

  def update
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id, :parent_id)
  end

end

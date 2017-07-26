class Api::CommentsController < ApplicationController

  def index
    @post = Post.find(params[:id])
    @comments = @post.comments

    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :create
    else
      render []
    end
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.body = comment_params[:body]
    if @comment.save
      render :update
    else
      render []
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :delete
    else
      render []
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id, :parent_id)
  end

end

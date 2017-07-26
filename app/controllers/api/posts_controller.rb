class Api::PostsController < ApplicationController
  def index
    @user = User.find(params[:id])
    @posts = @user.authored_posts + @user.received_posts

    render :index
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :create
    else
      render []
    end
  end

  def update
    @post = Post.find(params[:id])
    @post.body = post_params[:body]
    if @post.save
      render :update
    else
      render []
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render :delete
    else
      render []
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :author_id, :wall_id)
  end
end

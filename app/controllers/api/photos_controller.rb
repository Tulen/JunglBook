class Api::PhotosController < ApplicationController
  def index
    @user = User.find(params[:id])
    @photos = @user.photos

    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :create
    else
      render []
    end
  end

  def update
    @photo = Photo.find(params[:id])
    @photo.is_profile = !@photo.is_profile
    if @photo.save
      render :update
    else
      render []
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    if @photo.destroy
      render :delete
    else
      render []
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:body, :owner_id, :is_profile)
  end
end

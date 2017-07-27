class Api::ProfilePhotosController < ApplicationController
  def profile
    @user = User.find(params[:id])

    @photo = Photo.where("owner_id = ? ", params[:id]).where("is_profile = ?", true)

    if @photo.length != 0
      render "api/profile_photos/profile"
    else
      render []
    end
  end

  def cover
    @user = User.find(params[:id])

    @photo = Photo.where("owner_id = ? ", params[:id]).where("is_cover = ?", true)

    if @photo.length != 0
      render "api/profile_photos/cover"
    else
      render []
    end
  end
end

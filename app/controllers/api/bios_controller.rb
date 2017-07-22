class Api::BiosController < ApplicationController
  def show
    @user_bio = User.find(params[:id])

    if @user_bio
      render "api/bios/show"
    else
      render json: @user_bio.errors.full_messages, status: 422
    end

  end

  def update
    @user_bio = User.find(params[:id])

    if @user_bio.update_attributes(bios_params)
      render "api/bios/show"
    else
      render json: @user_bio.errors.full_messages, status: 422
    end

  end

  private

  def bios_params
    params.require(:user).permit(:work, :education, :current_city, :hometown, :relationship, :nickname, :favorite_quote)
  end
end

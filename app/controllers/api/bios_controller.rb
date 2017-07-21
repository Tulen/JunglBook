class Api::BiosController < ApplicationController
  def show
    @user_bio = User.find(params[:id])

    if @user_bio
      render "api/bios/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end



  private

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :sex)
  end
end

class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def destroy
    @user = current_user
    if @user.destroy
      logout!
      render "api/users/show"
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :sex, :profile_url, :cover_url)
  end
end

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
    params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :sex)
  end
end

# sample ajax post
# $.ajax({
#     method: 'POST',
#     url: '/api/users/',
#     data: {user:{email: 'justin@happy.com', password: 'password', fname:'justin', lname: 'happy', birthday: 'Sat, 10 Nov 2007', sex:'male'}}});
#

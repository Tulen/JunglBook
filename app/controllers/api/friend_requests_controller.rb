class Api::FriendRequestsController < ApplicationController
  def show
    @user = User.find(params[:id])
    @requests = @user.received_requests
    if @requests.length != 0
      render "api/friend_requests/show"
    else
      render(
        json: ["No friend requests"],
        status: 404
      )
    end

  end
end

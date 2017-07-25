class Api::FriendsController < ApplicationController
  def index
    @user = User.find(params[:id])

    @requests = FriendRequest.where("recipient_id = ? OR sender_id = ?", params[:id], params[:id]).where("status = ?", "accepted")

    if @requests.length != 0
      render "api/friends/index"
    else
      render(
        json: ["No friends"],
        status: 404
      )
    end
  end
end

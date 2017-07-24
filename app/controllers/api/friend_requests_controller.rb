class Api::FriendRequestsController < ApplicationController
  def index

    # debugger
    @requests = current_user.received_requests
    if @requests.length != 0
      render :index
    else
      render(
        json: ["No friend requests"],
        status: 404
      )
    end
  end

  def friends
    @user = User.find(params[:id])
    puts(@user)
    @requests = FriendRequest.where(["recipient_id = ? OR sender_id = ?", params[:id], params[:id]]).where("status = ?", "accepted")
    puts(@requests)
    if @requests.length != 0
      render "api/friend_requests/friends"
    else
      render(
        json: ["No friends"],
        status: 404
      )
    end
  end

  def create
    @request = FriendRequest.new(friend_request_params)
    if @request.save
      render "api/friend_requests/create"
    else
      render(
        json: ["Invalid friend request"],
        status: 404
      )
    end
  end

  def update
    @request = FriendRequest.find(params[:id])
    if @request.update_attributes(friend_request_params)
      render "api/friend_requests/accept"
    else
      render(
        json: ["Request error"],
        status: 404
      )
    end
  end

  def destroy
    @request = FriendRequest.find(params[:id])
    if @request.destroy!
      render "api/friend_requests/delete"
    else
      render(
        json: ["Request error"],
        status: 404
      )
    end
  end

  private

  def friend_request_params
    params.require(:friend_request).permit(:sender_id, :recipient_id, :status)
  end
end

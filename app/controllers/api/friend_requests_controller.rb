class Api::FriendRequestsController < ApplicationController
  def index
    @requests = current_user.received_requests + current_user.sent_requests
    if @requests.length != 0
      render :index
    else
      render(
        json: ["No friend requests"],
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

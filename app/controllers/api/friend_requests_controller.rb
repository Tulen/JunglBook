class Api::FriendRequestsController < ApplicationController
  def index
    @requests = current_user.received_requests + current_user.sent_requests
    render :index
  end

  def create
    @request = FriendRequest.new(friend_request_params)
    @request.sender_id = current_user.id

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
      @request.status = "accepted"
    @sender = @request.sender
    if current_user.id == @request.recipient_id && @request.save
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

    if current_user.id == @request.recipient_id || current_user.id == @request.sender_id
      @request.destroy
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
    params.require(:friend_request).permit( :recipient_id, :status)
  end
end

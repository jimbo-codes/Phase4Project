class UsersController < ApplicationController
    # Here you ened to set sessions, cookies, etc. use debugger to check

    # One custom route here for the signup, then the login can be

    # POST /user
  def create
    if User.find_by_username(params[:username])
    render json: {error: "This user already exists"}, status: :unprocessable_entity
    else
    user = User.create(user_params)
    session[:user_id] = user.id # This logs you in
    @active_user = session[:user_id]
    render json: user, status: :created
    end
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def test
    if cookies[:click]
      cookies[:click] +=1
    else
      cookies[:click] = 0
    end
    debugger
    # cookies[:click] = cookies[:click].to_i +1
    # session[:click] +=1
    # debugger

  end
  private
  def user_params
    params.permit(:username, :password)
  end

end

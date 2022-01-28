class SessionsController < ApplicationController
   
    def create
        @user = User.find_by_username(params[:username])
        if !!@user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            # debugger
            # you used to send back user Id and pass that through your app, dont need
            render json: @user, status: 201
        else
            render json: {error: "Invalid Username or Password."}, status: 401
        end
    end

    def test
          cookies[:click] ||= 0
        cookies[:click] = cookies[:click].to_i +1
        # session[:click] +=1
        # debugger
        render json: {note: "clicked"}
    
      end

    def destroy
        session.delete(:user_id)
        # logged_out: true
    end

    # NEED REDUX TO MAKE THE REFRESH PERSIST
# How to make the user stay on refresh
    # def is_logged_in?
    #     @current_user = User.find(session[:user_id]) if session[:user_id]
    #     if @current_user
    #       render json: {
    #         logged_in: true,
    #         user: UserSerializer.new(@current_user)
    #       }
    #     else
    #       render json: {
    #         logged_in: false
    #       }
    #     end
    #   end

end
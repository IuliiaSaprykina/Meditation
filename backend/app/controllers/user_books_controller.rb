class UserBooksController < ApplicationController
    def index
        @userbooks = UserBook.all
        render json: @userbooks
    end

    def show
        @userbook = UserBook.find(params[:id])
        render json: @userbook
    end

    def create
        @userbook = UserBook.create(
            user_id: params[:user_id],
            book_id: params[:book_id]
        )
        redirect_to "http://localhost:3001/explore.html"
    end

    def destroy_book_join
        book_join = UserBook.find_by(book_id: params[:book_id], user_id: params[:id])
        book_join.destroy
        redirect_to "http://localhost:3001/userShowPage.html?user_id=#{params[:id]}"    
    end
   
    # issue is that we don't currently have a way to dynamically change the form 
    # action on submission (right now its the user id, and we'd want it changed to userbook id)
    # event listener is what we'd need, instead we create a custom route
    # def destroy 
    #     @userbook = UserBook.find(params[:id])
    #     @userbook.destroy
    #     redirect_to "http://localhost:3001/"
    # end
end

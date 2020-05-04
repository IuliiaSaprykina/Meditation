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
        redirect_to "http://localhost:3001/"
    end
end

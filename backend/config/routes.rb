Rails.application.routes.draw do
  resources :user_books, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  resources :books

  delete "/user_books/:id", to: "user_books#destroy_book_join" 

  post "/users/:id", to: "users#update"

  # :id is a number that becomes the id parameter in the backend
  # normally this id would be getting the user_book id, 
  # however for this custom route, we are using /:id to refer to a user id

end

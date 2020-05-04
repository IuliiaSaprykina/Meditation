console.log("Hello from homepage")

const nameSelect = document.querySelector("#user-select");
const bookSelect = document.querySelector("#book-select");
const usersURL = "http://localhost:3000/users"
const booksURL = "http://localhost:3000/books"


fetch(usersURL)
    .then(parseJSON)
    .then(users => displayUsers(users))

fetch(booksURL)
    .then(parseJSON)
    .then(books => displayBooks(books))

function displayUsers(users){
    users.forEach(user => {
        displayUsersOptions(user)
    });
}

function displayBooks(books){
    books.forEach(book => {
        displayBooksOptions(book)
    });
}


function parseJSON(response){
    return response.json()
}

function displayUsersOptions(user){
    console.log("user: ", user)
    
    const nameOption = document.createElement('option')
    nameOption.innerText = user.name
    nameOption.value = user.id
    console.log("name select: ", nameSelect)

    nameSelect.append(nameOption)
}

function displayBooksOptions(book){
    console.log("book: ", book)
    
    const bookOption = document.createElement('option')
    bookOption.innerText = book.title
    bookOption.value = book.id
    bookSelect.append(bookOption)
}
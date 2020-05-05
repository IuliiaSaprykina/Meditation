const bookDataSelect = document.querySelector('.books-data')
const nameSelect = document.querySelector("#user-select");
const bookSelect = document.querySelector("#book-select");
const userPageSelect = document.querySelector('#user-page-select')
const usersURL = "http://localhost:3000/users"
const booksURL = "http://localhost:3000/books"

fetch("http://localhost:3000/books")
    .then(parseJSON)
    .then(books => displayBookData(books))

function parseJSON(response){
    return response.json()
}

function displayBookData(books){
    console.log(books)
    books.forEach(book => {
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p')
        const p2 = document.createElement('a')
    
        h2.innerText = book.title
        p1.innerText = `Author: ${book.author}
        Description: ${book.description}
        `
        let link = document.createTextNode("Read this book");
        
        p2.appendChild(link);
        p2.title = "Read this book";
        p2.href = book.link_url;
        p2.target = "_blank"

        // console.log(p2)
        bookDataSelect.appendChild(h2)
        bookDataSelect.append(p1, p2)
    })
}



fetch(usersURL)
    .then(parseJSON)
    .then(users => displayUsers(users))
    .then(users => displayUsersPageOptions(users))
    
fetch(booksURL)
    .then(parseJSON)
    .then(books => displayBooks(books))

function displayUsers(users){
    users.forEach(user => {
        displayUsersOptions(user)
    });
    return users
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

function displayUsersPageOptions(users){
    users.forEach (user => {
        const nameOption = document.createElement('option')
        nameOption.innerText = user.name
        nameOption.value = user.id
    
        userPageSelect.append(nameOption)
    })
}
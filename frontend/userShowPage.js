const queryParams = new URLSearchParams(window.location.search)
const user_id = queryParams.get('user_id')
const usersURL = `http://localhost:3000/users/${user_id}`
const userDataSelect = document.querySelector('.user-data')
const bookListSelect = document.querySelector('.book-list')
const bookNewLineSelect = document.querySelector('#book-new-line')
const bookListDeleteSelect = document.querySelector('#book-select')
const userUpdateForm = document.querySelector('.update-user > form')
const bookDeleteForm = document.querySelector('.delete-books > form') //grabbing first form that is a direct child of the div class "delete-books"
bookDeleteForm.action = `http://localhost:3000/user_books/${user_id}`
userUpdateForm.action = `http://localhost:3000/users/${user_id}`
console.log("book delete form", bookDeleteForm)


console.log(bookNewLineSelect)


fetch(usersURL)
    .then(parseJSON)
    .then(displayUser)
    .then(displayDeleteOptions)

function parseJSON(response){
    return response.json()
}

function displayUser(user){

    const hspan = document.createElement('span')
    hspan.innerText = `${user.name}'s Page`;
    const h1 = document.createElement('h1');
    h1.appendChild(hspan)
    userDataSelect.append(h1)

    displayBookList(user)
    return user;

}

function displayBookList(user){
    let bookList = user.books;
    const booklist_h3 = document.createElement('h3');

    booklist_h3.innerText = "Books to read: "
    bookList.forEach (book => {
        // I moved display booklist into its own function since that is 
        //different from displaying user info
        // The reason links were not on a new line: 
        // h3 was declared outside of the loop, so each book kept being overwritten by the next one 
        let h3 = document.createElement('a');
        let link = document.createTextNode(`- ${book.title}`);
        let linebreak = document.createElement('br');

        h3.appendChild(link)
        h3.title = book.title
        h3.href = book.link_url
        h3.target = "_blank"
        
        userDataSelect.append(booklist_h3)
        bookNewLineSelect.append(h3, linebreak)
    })
    return user;
}

// function deleteBookList(user){
//     let deleteButton = user.books.delete_all;
//     bookListDeleteSelect.delete(deleteButton)
    
// }

function displayDeleteOptions(user){
    console.log("users books: ", user.books)
    let bookList = user.books;

    bookList.forEach (book => {
        const bookOption = document.createElement('option');
        bookOption.innerText = book.title
        bookOption.value = book.id
        bookListDeleteSelect.append(bookOption)
    })
    return user;
}
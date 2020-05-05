const queryParams = new URLSearchParams(window.location.search)
const user_id = queryParams.get('user_id')
const usersURL = `http://localhost:3000/users/${user_id}`
const userDataSelect = document.querySelector('.user-data')
const booksListSelect = document.querySelector('.books-list')
const bookNewLineSelect = document.querySelector('#book-new-line')
console.log(bookNewLineSelect)


fetch(usersURL)
    .then(parseJSON)
    //.then(user => console.log(user))
    .then(displayUser)

//     function displayUsers(users){
//         users.forEach(user => {
//             displayUsersOptions(user)
//         });
//         return users
//     }

function displayUser(user){
    const h2 = document.createElement('h2');
    const h2_2 = document.createElement('h2');
    const h3 = document.createElement('a');
    
    let booksList = user.books;
    
    
    h2.innerText = user.name;
    h2_2.innerText = "Books to read: "
    booksList.forEach (book => {
        let link = document.createTextNode(book.title);
        h3.appendChild(link)
        h3.title = book.title
        h3.href = book.link_url
        h3.target = "_blank"
        
        
        bookNewLineSelect.append(h3)
        
    })
    userDataSelect.append(h2, h2_2)
}

function parseJSON(response){
    return response.json()
}


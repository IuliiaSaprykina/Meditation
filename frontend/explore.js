

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
        document.body.appendChild(h2)
        document.body.append(p1, p2)
    })
}
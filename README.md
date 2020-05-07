# Meditation Cube
Explore and practice meditation with no distractions

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
This website will help you find meditation resources, but without distractions. Youtube and similar websites have many distractions meant to keep you on their site like ads, reccomended videos, auto-playing videos and so on. Our site takes meditation related media and allows you to relax without all the unnecessary extra stimulus. 

## Intro Video
[Meditation Cube on YouTube - coming soon](link)

## Technologies
* ActiveRecord - version 6.0.2.2
* Rails - version 6.0.2 
* Ruby - version 2.6.1 and 2.6.5
* SQLite3 - version 1.4

## Setup
To run this project, install it locally by cloning the GitHub repository and typing:
Open two command terminals. 
On the first one, navigate to the backend folder and run 
```rails s```
On the second terminal, navigate to the frontend folder and run
```lite-server```

## Code Examples
```
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

        bookDataSelect.appendChild(h2)
        bookDataSelect.append(p1, p2)
    })
}
```

## Features
* Browse writings about how to meditate in the form of PDFs
* Watch meditation music or guided meditation videos
* Create a list of books you want to read 
* Remove books from your list
* Create a new user
* Update user name

## Status
Project is finished. 

## Contact
Created by [Hannah Drury](https://www.linkedin.com/in/hannah-drury-042a8391/) and [Iuliia Saprykina](https://www.linkedin.com/in/iuliia-saprykina-ab3351100)

Feel free to contact us!!! 








const nameSelect = document.querySelector('#user-page-select')
const usersURL = "http://localhost:3000/users"

fetch(usersURL)
    .then(parseJSON)
    .then(displayUserOptions)


function parseJSON(response){
    return response.json()
}

function displayUserOptions(users){
    users.forEach(user => {
        let userOption = document.createElement('option')
        userOption.innerText = user.name
        userOption.value = user.id

        nameSelect.append(userOption)

    });
}
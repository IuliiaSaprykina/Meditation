const apikey = `AIzaSyC1G6iIfiHPkXhVijBPk4wel7JZ2CTtrIg`
const musicURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=meditation%20music&type=video&key=${apikey}`



fetch(musicURL)
    .then(parseJSON)


function parseJSON(response){
    return response.json()
}
const videoSelect = document.querySelector('.music > iframe')

const apikey = `AIzaSyC1G6iIfiHPkXhVijBPk4wel7JZ2CTtrIg`
const musicURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=meditation%20music&type=video&key=${apikey}`



fetch(musicURL)
    .then(parseJSON)
    .then(displayVideo)


function parseJSON(response){
    return response.json()
}

function displayVideo(video){
    console.log("video: ", video.items[0])
    console.log("video: ", video.items[0]["id"]["videoId"])
    let vidId = video.items[0]["id"]["videoId"]
    let videoURL = `https://www.youtube.com/embed/${vidId}`
    console.log("link", videoURL)
    videoSelect.src = videoURL
}
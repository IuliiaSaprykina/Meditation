const videoSelect = document.querySelector('.music > iframe')
const guidedVideoSelect = document.querySelector('.video > iframe')
console.log("guided vid select:", guidedVideoSelect)

const apikey = `AIzaSyC1G6iIfiHPkXhVijBPk4wel7JZ2CTtrIg`
const musicURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=meditation%20music&type=video&key=${apikey}`
const guideURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=guided%20meditation&type=video&key=${apikey}`


fetch(musicURL)
    .then(parseJSON)
    .then(pickRandomVideo)
    .then(displayVideo)

fetch(guideURL)
    .then(parseJSON)
    .then(pickRandomVideo)
    .then(displayGuidedVideo)


function parseJSON(response){
    return response.json()
}

function pickRandomVideo(videos){
    console.log("video:", videos.items)
    let videoArray = videos.items
    const randomElement = videoArray[Math.floor(Math.random() * videoArray.length)];
    return randomElement
}

function displayVideo(video){
    console.log("video:", video["id"]["videoId"])
    let vidId = video["id"]["videoId"]
    let videoURL = `https://www.youtube.com/embed/${vidId}`
    console.log("link", videoURL)
    videoSelect.src = videoURL
}

function displayGuidedVideo(video){
    console.log("video:", video["id"]["videoId"])
    let vidId = video["id"]["videoId"]
    let videoURL = `https://www.youtube.com/embed/${vidId}`
    console.log("link", videoURL)
    guidedVideoSelect.src = videoURL
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
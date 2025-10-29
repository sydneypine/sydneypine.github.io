// Select the video element and the text box
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

// Array of video sources for toggling
const videoSources = ["videos/nye2021.mp4", "videos/smoothie.mp4"];
// Current video index, starting with the first video
let currentVideoIndex = 0;
// Array to store the playback time for each video
const videoTimes = [0, 0];

var isSoundEnabled = false;

function toggleVideo() {
	if (isSoundEnabled === false) {
		videoPlayer.muted = false;
		isSoundEnabled = true;
	}
videoTimes[currentVideoIndex] = videoPlayer.currentTime;
currentVideoIndex = 1 - currentVideoIndex;
videoPlayer.src = videoSources[currentVideoIndex];
videoPlayer.load();
videoPlayer.currentTime = videoTimes[currentVideoIndex];
videoPlayer.play();
}
// Add a click event to the text box to switch videos
textBox.addEventListener("click", toggleVideo);
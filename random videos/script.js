const videoPart1 = ["video/clip01.mp4",
					"video/clip01b.mp4",
					"video/clip02.mp4",
					"video/clip03.mp4",
					"video/clip04.mp4"];

const videoPart2 = ["video/clip05.mp4",
					"video/clip06.mp4",
					"video/clip07.mp4",
					"video/clip08.mp4",
					"video/clip09.mp4"];

const videoPart3 = ["video/clip10.mp4",
					"video/clip11_face.mp4",
					"video/clip12_face.mp4",
					"video/clip13_face.mp4",
					"video/clip14_face.mp4",
					"video/clip15_face.mp4",
					"video/clip16_face.mp4",
					"video/clip17_face.mp4",
					"video/clip18_face.mp4",
					"video/clip20_random.mp4"];

const generateBtn = document.getElementById("generateBtn");
const player = document.getElementById("player");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex])
	return array[randomIndex];
}

generateBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3)
	];
	
	currentIndex = 0;
	playCurrent();
}

function playCurrent() {
player.src = playlist[currentIndex];
player.load();
player.play().catch(err => {
console.warn("Play interrupted (autoplay policy?):", err);
});
}

// Advance when a video ends
player.addEventListener("ended", () => {
currentIndex++;
if (currentIndex < playlist.length) {
playCurrent();
} else {
console.log("All three parts finished.");
}
});
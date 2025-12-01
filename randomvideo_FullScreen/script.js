const videoPart1 = [
	{ src: "video/clip01.mp4", caption: "Caption One" },
	{ src: "video/clip01b.mp4", caption: "Caption Two" },
	{ src: "video/clip02.mp4", caption: "Caption Three" },
	{ src: "video/clip03.mp4", caption: "Caption Four" },
	{ src: "video/clip04.mp4", caption: "Caption Five" }
];

const videoPart2 = [
	{ src: "video/clip05.mp4", caption: "Caption Six" },
	{ src: "video/clip06.mp4", caption: "Caption Seven" },
	{ src: "video/clip07.mp4", caption: "Caption Eight" },
	{ src: "video/clip08.mp4", caption: "Caption Nine" },
	{ src: "video/clip09.mp4", caption: "Caption Ten" }
];

const videoPart3 = [
	{ src: "video/clip10.mp4", caption: "Caption Eleven" },
	{ src: "video/clip11_face.mp4", caption: "Caption Twelve" },
	{ src: "video/clip12_face.mp4", caption: "Caption Thirteen" },
	{ src: "video/clip13_face.mp4", caption: "Caption Fourteen" },
	{ src: "video/clip14_face.mp4", caption: "Caption Fifteen" },
	{ src: "video/clip15_face.mp4", caption: "Caption Sixteen" },
	{ src: "video/clip16_face.mp4", caption: "Caption Seventeen" },
	{ src: "video/clip17_face.mp4", caption: "Caption Eighteen" },
	{ src: "video/clip18_face.mp4", caption: "Caption Nineteen" },
	{ src: "video/clip20_random.mp4", caption: "Caption Twenty" }
];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex])
	return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	titleOverlay.classList.add = ("playing");
	player.classList.add("fullscreen");
	playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3),
	];
	
	currentIndex = 0;
	playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
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
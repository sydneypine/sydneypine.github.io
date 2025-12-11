const videoPart1 = [
	{ src: "videos/shot1.mp4", caption: "I have nothing to live for." },
	{ src: "videos/shot2.mp4", caption: "There, it's done." },
	{ src: "videos/shot3.mp4", caption: "I'm still here?" },
	{ src: "videos/shot4.mp4", caption: "And so is he!" }
];

const videoPart2 = [
	{ src: "videos/shot5.mp4", caption: "He's so good to me." },
	{ src: "videos/shot6.mp4", caption: "Sometimes he seems too good to be true." },
	{ src: "videos/shot7.mp4", caption: "Sometimes it all seems to fade." },
	{ src: "videos/shot8.mp4", caption: "I'm happy as long as he's here." }
];

const videoPart3 = [
	{ src: "videos/shot9.mp4", caption: "Where did he go?" },
	{ src: "videos/shot10.mp4", caption: "Was he ever really here? Was I?" },
	{ src: "videos/shot11.mp4", caption: "...no." },
	{ src: "videos/shot12.mp4", caption: "---" }
];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); 
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex])
	return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	titleOverlay.classList.add("playing");
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
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
	replayBtn.style.display = "block";

}
});
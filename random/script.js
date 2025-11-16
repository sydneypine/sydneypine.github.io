const adjectives = ["beautiful",
					"better",
					"silly",
					"seductive",
					"stupid"];

const nouns = ["park",
				"photo",
				"cat",
				"friend",
				"bottle"];

const verbs = ["run",
				"sit",
				"stand",
				"hop",
				"fly"];

const generateBtn = document.getElementById("generateBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * adjectives.length);
	console.log("Random word:", adjectives[randomIndex])
	return array[randomIndex];
}

generateBtn.addEventListener("click", picker);

function buildSentence() {
	const sentence = [
		picker(adjectives),
		picker(nouns),
		picker(verbs)
	];
	
	console.log(sentence);
}

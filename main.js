console.log('WORKING')
const mainWordInput = document.querySelector('#mainWordInput');
const inputsContainer = document.querySelector("#inputsContainer"); 
const buttonSubmit = document.querySelector("#buttonSubmit");
console.log(inputsContainer)
// TODO: needs to set some words
const possibleWords = [
  "Desarrollo",
  "Programación",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Angular",
  "Vue",
  "Node.js",
  "Express",
  "BaseDatos",
  "MySQL",
  "MongoDB",
  "API",
  "Servidor",
  "Cliente",
  "Frontend",
  "Backend",
  "Framework",
  "Git",
  "Versiones",
  "Interfaz",
  "Diseño",
  "Responsive",
  "Desarrollador",
  "Código",
  "Depuración",
  "Testing",
  "Pruebas",
  "Despliegue",
  "Nube",
  "AWS",
  "Azure",
  "Firebase",
  "DevOps",
  "Ciberseguridad",
  "Algoritmo",
  "Estructura",
  "Inteligencia",
  "MachineLearning",
  "Realidad",
  "IoT",
  "Redes",
  "HTTP",
  "HTTPS",
  "REST",
  "JSON",
  "AJAX",
  "DOM",
  "SASS",
  "LESS",
  "Bootstrap",
  "Materialize",
  "Webpack",
  "NPM",
  "Yarn",
  "Grunt",
  "Gulp",
  "Scrum",
  "Kanban",
  "Ágil",
  "Ciclo",
  "UX",
  "Accesibilidad",
  "SEO",
  "Cookies",
  "Autenticación",
  "Autorización",
  "Websocket",
  "Mobile",
  "SPA",
  "MVC",
  "Gateway",
  "Microservicios",
  "Contenedor",
  "Docker",
  "Kubernetes",
  "Blockchain",
  "Criptomoneda",
  "Contract",
  "Hacker",
  "Bug",
  "Pila",
  "Lenguaje",
  "Compilador",
  "Integración",
  "Scalabilidad",
  "BigData",
  "Data",
  "Análisis",
  "AR",
  "VR",
  "Caché",
  "Protocolo",
  "Herramienta",
  "Repositorio",
  ]

function getRandomWord() {
	const positionWord = Math.round(Math.random() * possibleWords.length);
	return possibleWords[positionWord];
}

function printInputs(word, guessedLetters, wordWithCase) {
	console.log('Existing content:', inputsContainer.innerHTML);
	// clear the current content
	inputsContainer.innerHTML = '';
	console.log('cleared content', inputsContainer.innerHTML);
	console.log(word)
	// re render content
	for (let i = 0; i < word.length; i++) {
		const currentLetter = word[i];
		const currentLetterWithCase = wordWithCase[i];
		console.log(guessedLetters.has(currentLetter), currentLetter)
		if (guessedLetters.has(currentLetter)) {
			// render the word
			const inputLetter = `<div class="border border-black p-3">${currentLetterWithCase}</div>`
			inputsContainer.insertAdjacentHTML('beforeend', inputLetter);
			continue;
		}
		// render empty input
		const emptyInput = `<div class="border border-black p-3"></div>`
		inputsContainer.insertAdjacentHTML('beforeend', emptyInput);
	}
}

function renderError() {
	// TODO render some error;
	bodyToColor('bg-red-100')

}

function checkIfHasWin(guessedLetters, word) {
  for (let i = 0; i < word.length; i++) {
    if (!guessedLetters.has(word[i])) return false;
  }
	return true;
}

function bodyToColor(color) {
	console.log('renderWin')
	const body = document.querySelector('body');
	console.log(body)
	body.classList.add(color);
	setTimeout(() => {
		body.classList.remove(color);
	}, 1000)
}

function renderWin() {
	bodyToColor('bg-green-100');
}

function main() {
	console.log('main')
	const wordWithCase = getRandomWord();
	const word = wordWithCase.toLowerCase();
	const guessedLetters = new Set();
	console.log({word, guessedLetters})
	printInputs(word, guessedLetters, wordWithCase);
	const submitContainer = document.querySelector('.submit-container');

	buttonSubmit.addEventListener("click", () => {
		const letter = mainWordInput.value.toLowerCase()
		console.log(letter)

		// check if it does exist in word
		// updates guessedLetters also
		if ([...word].includes(letter)) {
			guessedLetters.add(letter)
			printInputs(word, guessedLetters, wordWithCase);
			renderWin()
			// checkIfHasWin
			const hasWon = checkIfHasWin(guessedLetters, word);
			console.log({hasWon})
			if (hasWon) {
				renderWin();
				// block submit button
				submitContainer.style.display = 'none'
			}
		}
		else renderError();
		// clean input
		mainWordInput.value = '';
	})
	submitContainer.addEventListener('keydown', (e) => {
		console.log(e.key)
		if (e.key !== 'Enter') return;
		console.log('doing')
		// i need to pass the letter as event.value
		const inputEvent = new Event('click', {bubbles: false, cancelable: false});
		// Object.defineProperty(inputEvent, 'value', { value:  });
		buttonSubmit.dispatchEvent(inputEvent);
		mainWordInput.value = '';
	})
}

main()




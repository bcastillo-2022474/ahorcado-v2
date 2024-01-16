const mainWordInput = document.querySelector('#mainWordInput');
const inputsContainer = document.querySelector("#inputsContainer"); 
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

function printInputs(word, guessedLetters) {
	// clear the current content
	inputsContainer.innerHtml = '<div class="flex justify-center gap-3">'
	// re render content
	for (let i = 0; i < word.length; i++) {
		const currentLetter = word[i];
		if (guessedLetters.has(currentLetter)) {
			// render the word
			const inputLetter = `<div class="border p-3">${currentLetter.toUpperCase()}</div>`
			inputsContainer.innerHtml+=inputLetter;
			return;
		}
		// render empty input
		const emptyInput = `<div class="border p-3"></div>`
		inputsContainer.innerHtml+=emptyInput
	}
	inputsContainer.innerHtml+='</div>'
}

function renderError() {
	// TODO render some error;
}

function main() {
	const word = getRandomWord()
	const guessedLetters = new Set();
	printInputs(word, guessedLetters);

	mainWordInput.addEventListener("input", (e) => {
		const letter = e.target.value;
		// check if it does exist in word
		// updates guessedLetters also
		if (word.contains(letter)) printInputs(word, guessedLetters);
		else renderError();
		// clean input
		mainWordInput.value = '';
	})
}




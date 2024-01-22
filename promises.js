let tryNumber = 1;
const response = document.querySelector("#response");

function enviarDatos(e) {
	e.preventDefault();
	const nombre = document.getElementById("input").value;
	enviarDatosAlServidor(nombre)
		.then(() => {
			response.innerHTML = ''
			response.insertAdjacentHTML('beforeend', `bienvenido al sistema ${tryNumber++}`)
		})
		.catch(() => {
			response.innerHTML = ''
			response.insertAdjacentHTML('beforeend', `usted no esta autorizado ${tryNumber++}`)
		});
}

function wait(seconds) {
	return new Promise((resolve) => {
		setTimeout(resolve, 1000 * seconds)
	});
}

function enviarDatosAlServidor(nombre) {
	return wait(2).then(() => {
		console.log(nombre)
		if (nombre.startsWith('x')) return Promise.reject();
		// I return no error
		return;
	})
}

document.querySelector("#button").addEventListener('click', enviarDatos);

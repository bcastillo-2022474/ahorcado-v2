let tryNumber = 1;
const response = document.querySelector("#response");

async function enviarDatos(e) {
	e.preventDefault();
	const nombre = document.getElementById("input").value;
	try {	
		await enviarDatosAlServidor(nombre);
		response.innerHTML = ''
		response.insertAdjacentHTML('beforeend', `<div class="text-green-800">bienvenido al sistema ${tryNumber++}</div>`)
	} catch (e) {
		response.innerHTML = ''
		response.insertAdjacentHTML('beforeend', `<div class="text-red-400">usted no esta autorizado ${tryNumber++}</div>`)
	}
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

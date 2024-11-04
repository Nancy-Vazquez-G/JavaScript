const cursos = [
	{ id: 1, cruso: "noviazgo y sexualidad", precio: "1500.00" },
	{ id: 2, cruso: "inteligencia emocional", precio: "1500.00" },
	{ id: 3, cruso: "mi yo social", precio: "1500.00" },
	{ id: 4, cruso: "administracion del tiempo", precio: "1500.00" },
	{ id: 5, cruso: "la magia del dinero", precio: "1500.00" },
	{ id: 6, cruso: "el costo de tener la razon", precio: "1500.00" },
];


let flag_fin = true;
let total = 0.0;
let showCursos = "";
let cantidad = 0;
let showPromocion = "No tienes promocion \n";


for (p in cursos) {
	showCursos =
		showCursos +
		`${cursos[p].id}. ${cursos[p].cruso} = $ ${cursos[p].precio} \n`;
}


function init() {
	let carrito = [];
	let validarPromocion;
	
	while (flag_fin) {
		let id = parseInt(
			prompt(
				"Catalogo de cursos\n" + showCursos + "Ingresa el id del cruso"
			)
		);

		let cursoSeleccionado = buscarCurso(id);
		console.log(cursoSeleccionado);

		if (cursoSeleccionado.hasOwnProperty("id")) {
			cantidad += 1;
			carrito.push(cursoSeleccionado);

			validarPromocion = calcularPromocion(cantidad, carrito);

			console.log(JSON.stringify(validarPromocion));

			if (validarPromocion.promocion) {
				showPromocion = "Tienes promocion \n";
			}
			
		} else {
			alert("El id del curso seleccionado no existe");
		}
		flag_fin = confirm("¿Deseas adquirir otro curso?");
		
	}

	alert(showPromocion + "Cantidad de cursos: " + cantidad + "\n" + "Tu total es: $ " + validarPromocion.total);
	
}

function calcularPromocion(q, c) {
	console.log("carrito", c);
	console.log("cantidad", q);

	let total = 0;
	let nuevoCarrito = [];

	for (l in c) {
		nuevoCarrito.push(c[l]);
	}

	let tienePromocion = false;
	let resultado = {};

	if (q >= 3) {
		tienePromocion = true;
		for (l in nuevoCarrito) {
			nuevoCarrito[l].precio = 1200.00;
		}
		console.log(JSON.stringify(nuevoCarrito));
	}

	if (tienePromocion) {
		resultado["promocion"] = true;
		for (l in nuevoCarrito) {
			total = total + parseFloat(nuevoCarrito[l].precio);
		}
		resultado["total"] = total;
	} else {
		resultado["promocion"] = false;
		for (l in nuevoCarrito) {			
			total = total + parseFloat(nuevoCarrito[l].precio);
		}
		resultado["total"] = total;
	}

	return resultado;
}


function buscarCurso(id) {
	let detalleCurso = {};

	for (p in cursos) {
		if (id == cursos[p].id) {
			detalleCurso = cursos[p];
		}
	}

	return detalleCurso;
}

init();
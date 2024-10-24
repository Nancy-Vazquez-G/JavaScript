
const cursos=[
    {id:1, curso: "Noviazgo y sexualidad", precio: "1,500"},
    {id:2, curso: "Inteligencia emocional", precio: "1,500"},
    {id:3, curso: "Mi yo social", precio: "1,500"},
    {id:4, curso: "Administración del tiempod", precio: "1,500"},
    {id:5, curso: "Finanzas sanas", precio: "1,500"},
    {id:6, curso: "El costo de tener la razón", precio: "1,500"},
];

let flag_fin = true;
let total = 0.0;
let showCursos = "";
let cantidad = 0;
let carrito =[];

for (p in cursos) {
    showCursos =
        showCursos + `${cursos[p].id}. ${cursos[p].curso} = $ ${cursos[p].precio} \n`;
}

function init() {
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

			let validarPromocion = calcularPromocion(cantidad, carrito);

			if (validarPromocion.promocion) {
				alert("Tu carrito tiene promoción");
			}
		} else {
			console.log("El id del curso seleccionado no existe");
		}

		flag_fin = confirm("¿Deseas adquirir otro curso?");
	}
}

function calcularPromocion(cantidad, carrito) {
	console.log("carrito", carrito);
	console.log("cantidad", cantidad);

	let total = 0.0;
	let nuevoCarrito = carrito;
	let tienePromocion = false;
	let resultado = {};

	if (cantidad >= 3) {
		tienePromocion = true;
		nuevoCarrito.reduce((a, b) => a + b.precio, 0);
		console.log(nuevoCarrito);
	}

	if (tienePromocion) {
		resultado["promocion"] = true;
		
		console.log(total);
	} else {
		resultado["promocion"] = false;
		total = nuevoCarrito.map((x) => x.precio).reduce((a, b) => parseFloat(a) + parseFloat(b));
		console.log(total);
	}

	return resultado;
}

function buscarCurso(id) {
	let detalleCurso = {};

	for (p in cursos) {
		if (id == cursos[p].id) {
			detalleCurso = {
				id: id,
				cruso: cursos[p].cruso,
				precio: cursos[p].precio,
			};
		}
	}

	return detalleCurso;
}

init();
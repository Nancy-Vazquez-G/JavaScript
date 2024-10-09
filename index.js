
function mostrarCursos() {
    let catalogo = "Catálogo de cursos: \n";
    catalogo += "1. Noviazgo y sexualidad \n";
    catalogo += "2. Inteligencia emocional \n";
    catalogo += "3. Mi yo social \n";
    catalogo += "¿Quieres conocer nuestras propociones?\n"
    return catalogo;
}

function elegirCurso() {
    let total = 0;
    let seguirEligiendo = true;

    while (seguirEligiendo) {
        let catalogo = mostrarCursos();
        let seleccion =prompt(
            "¿A qué curso quieres asistir? Ingresa el número o escribe SALIR"
        );

        if (seleccion === null || seleccion === "") {
            alert("Dato incorrecto");
            continue;
        }

        if (seleccion === SALIR) {
            break;
        }

        if (isNaN(seleccion) || seleccion<1 || seleccion > 3) {
            alert("Dato incorrecto");
            continue;
        }
    }
}
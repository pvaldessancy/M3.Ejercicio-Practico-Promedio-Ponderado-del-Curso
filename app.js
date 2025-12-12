function iniciarPrograma() {
    // 1. Solicitar cantidad de alumnos
    let cantidadAlumnos = parent.prompt("Ingrese la cantidad de alumnos:");

    // Convertir a número
    cantidadAlumnos = parseInt(cantidadAlumnos);

    // Validar
    if (isNaN(cantidadAlumnos) || cantidadAlumnos <= 0) {
        alert("Por favor ingrese una cantidad válida.");
        return;
    }

    let sumaPromedios = 0;

    // 2. Iterar por cada alumno
    for (let i = 1; i <= cantidadAlumnos; i++) {
        // Solicitar las 3 notas
        // Usamos parseFloat para aceptar decimales
        let nota1 = parseFloat(prompt(`Alumno ${i}: Ingrese Nota 1 (25%)`));
        let nota2 = parseFloat(prompt(`Alumno ${i}: Ingrese Nota 2 (35%)`));
        let nota3 = parseFloat(prompt(`Alumno ${i}: Ingrese Nota 3 (40%)`));

        // Calcular promedio ponderado este alumno
        let promedioAlumno = (nota1 * 0.25) + (nota2 * 0.35) + (nota3 * 0.40);

        // Sumar al total
        sumaPromedios += promedioAlumno;
    }

    // 3. Calcular promedio final del curso
    let promedioFinal = sumaPromedios / cantidadAlumnos;

    // 4. Mostrar resultado en la página
    document.getElementById("resultado").innerHTML =
        `El promedio general del curso (de ${cantidadAlumnos} alumnos) es: ${promedioFinal.toFixed(2)}`;
}

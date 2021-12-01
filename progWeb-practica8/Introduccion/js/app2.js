// *** OBJETOS ***

// Estudiante,: No. control, nombre, carrera, materias(materia, promedio), pasatiempos, lenguajes.

const Persona = {
    Control: "420550",
    Nombre: "Juan José",
    Carrera: "Ing. en Sistemas Computacionales",
    Materias: [
        {Materia: "Estructura de datos", Promedio: 100},
        {Materia: "Programación", Promedio: 90},
        {Materia: "Base de datos 80", Promedio: 80},
        {Materia: "Matemáticas 1", Promedio: 100},
        {Materia: "Prog Web", Promedio: 100},
        {Materia: "Redes I", Promedio: 100},
    ],
    Pasatiempos: ['Deporte', 'Salir con amigas', 'Programas en Java Script'],
    Lenguajes:['HTML', 'CSS', 'Java Script', 'SQL', 'MongoDB']
}

for (let i = 0; i < Persona.Materias.length; i++) {
    console.log(Persona.Materias[i].Materia);
}

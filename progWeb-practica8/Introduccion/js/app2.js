// *** OBJETOS ***

// Estudiante,: No. control, nombre, carrera, materias(materia, promedio), pasatiempos, lenguajes.

const Persona1 = {
    Control: "420550",
    Nombre: "Juan José",
    Carrera: "Ing. en Sistemas Computacionales",
    Materias: [
        {Materia: "Estructura de datos", Promedio: 100},
        {Materia: "Programación", Promedio: 90},
        {Materia: "Base de datos 80", Promedio: 80},
        {Materia: "Matemáticas 1", Promedio: 75},
        {Materia: "Prog Web", Promedio: 100},
        {Materia: "Redes I", Promedio: 100},
    ],
    Pasatiempos: ['Deporte', 'Salir con amigas', 'Programas en Java Script'],
    Lenguajes:['HTML', 'CSS', 'Java Script', 'SQL', 'MongoDB'],
    regresaPromedio: function() {
            let promedio = 0;
            for (let i = 0; i < this.Materias.length; i++){
                promedio += this.Materias[i].Promedio;
    }
    return Math.round(promedio / Persona1.Materias.length)
    }
}

const Persona2 = {
    Control: "420200",
    Nombre: "Kenia Alondra",
    Carrera: "Ing. en Sistemas Computacionales",
    Materias: [
        {Materia: "Estructura de datos", Promedio: 100},
        {Materia: "Programación", Promedio: 90},
        {Materia: "Base de datos 80", Promedio: 80},
        {Materia: "Matemáticas 1", Promedio: 75},
        {Materia: "Prog Web", Promedio: 100},
        {Materia: "Redes I", Promedio: 100},
    ],
    Pasatiempos: ['Deporte', 'Salir con amigas', 'Programas en Java Script'],
    Lenguajes:['HTML', 'CSS', 'Java Script', 'SQL', 'MongoDB'],
    regresaPromedio: function() {
            let promedio = 0;
            for (let i = 0; i < this.Materias.length; i++){
                promedio += this.Materias[i].Promedio;
    }
    return Math.round(promedio / Persona2.Materias.length)
    }
}

const Persona3 = {
    Control: "420300",
    Nombre: "Gustavo Ángel",
    Carrera: "Ing. en Sistemas Computacionales",
    Materias: [
        {Materia: "Estructura de datos", Promedio: 100},
        {Materia: "Programación", Promedio: 90},
        {Materia: "Base de datos 80", Promedio: 80},
        {Materia: "Matemáticas 1", Promedio: 75},
        {Materia: "Prog Web", Promedio: 100},
        {Materia: "Redes I", Promedio: 100},
    ],
    Pasatiempos: ['Deporte', 'Salir con amigas', 'Programas en Java Script'],
    Lenguajes:['HTML', 'CSS', 'Java Script', 'SQL', 'MongoDB'],
    regresaPromedio: function() {
            let promedio = 0;
            for (let i = 0; i < this.Materias.length; i++){
                promedio += this.Materias[i].Promedio;
    }
            return Math.round(promedio / Persona3.Materias.length)
    },
    Direccion: {Calle: "Conocida", Colonia: "Centro"}
}

// console.log(`El promedio es: ${Persona.regresaPromedio()}`);

// const est = [];

// est.push(Persona1);
// est.push(Persona2);
// est.push(Persona3);

// est.forEach(alumno => {
//     console.log(`No. Control: ${alumno.Control}`);
//     console.log(`Nombre: ${alumno.Nombre}`);
//     console.log(`Promedio: ${alumno.regresaPromedio()}`);
// });

// Destrucción de objetos

// const nombre = Persona3.Nombre

// const {Nombre, Materias, Carrera, Lenguajes, Direcion:{Calle, Colonia}} = Persona3
// console.log(Nombre);
// Materias.forEach(m => {
//     console.log(m.Materia);
// });
// console.log(Carrera);
// Lenguajes.forEach(l => {
//     console.log(l);
// });
// console.log(Direcion.Calle);
// console.log(Direcion.Colonia);

console.log(Object.keys(Persona1));
console.log(Object.values(Persona1));
console.log(Object.entries(Persona1));
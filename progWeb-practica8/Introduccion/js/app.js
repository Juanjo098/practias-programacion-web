console.log("Hola, buenos dias");

// 1. Formas de declarar variables: const, let y var
// 2. Tipos de datos: numerico, string float, boleano
// 3. Cadenas: Uso de comillas dobles, sencillas, templates literals (backtip)
//    length, concatenar con el "+", producto.concat("producto con descuento") concatena a rpoducto el mensaje
//    variable.metodo ejemplo: cadena.trimStart(), cadena.trimEnd(), cadena.trim()
//    
// 4. Numeros, funciiones matemáticas, utilizando libreria Math, ejemplo Math.round(2.8)

// Declarar variables con "var" está en desuso
var nombre = "Juan José Silva López";
console.log(nombre);

// La variables declaradas con 
let edad;
edad = "26";
console.log("Edad " + edad);

// Las constantes deben definirse al momento de declararse
const producto = "Computadora Samsung 27 pulgadas";
console.log(producto);

// *** CADENAS ***
// Concatenar
console.log("Formas de concatenar");
cadena = "Computadora Samsung 27\"";
console.log(cadena + " con precio de oferta");
console.log(cadena.concat(" con precio de oferta"));
console.log(`${cadena} con precio de oferta`);


// Tamaño de la cadena
console.log("Tamaño de la cadena " + cadena.length);

// Pasar cadena a mayúsculas
console.log(cadena.toUpperCase());

let correo = "example@mail.com";
cad = correo.split("@");
console.log(cad);
console.log(cad[0]);
console.log(cad[1]);
console.log(cad[0].length);
console.log(cad[1].length);

// *** NÚMEROS ***
    // Constante PI
    console.log(Math.PI);
    // Redondeo
    console.log(Math.round(28.7));

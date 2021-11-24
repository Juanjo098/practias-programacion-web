// Array Methods o Métodos de Arreglos

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

const carrito = [
    {id:100, nombre: "Tablet Samsung 14\"", precio: 6589.8, tipo: 1},
    {id:200, nombre: "Monitor curvo Samsung de 27\"", precio: 4869.8, tipo: 2},
    {id:300, nombre: "Teclado marca Apwon", precio: 1425.7, tipo: 1},
    {id:400, nombre: "Mouse óptico inalámbrico", precio: 1875.8, tipo: 2},
];

meses.forEach(function(m) {
    console.log(m);
});

meses.forEach((mes, index) => {
    if (mes == "Abril")
        console.log(`Encontrado en la posición ${index + 1}`);
});

// Foreach con arrow funtion
// meses.forEach(m => {
//     console.log(m);
// });

// la función "map" obtiene una copia de un arreglo

const copiaMeses = meses.map(function (elemento){
    return elemento;
});

console.log(copiaMeses);

const copiaCarrito = carrito.map(function(producto){
    return `Producto: ${producto.nombre} fue comprado por la cantidad: ${producto.precio}`;
});

// const copiaCarrito2 = []

// carrito.forEach(producto => {
//     copiaCarrito2.push(`Producto: ${producto.nombre} fue comprado por la cantidad: ${producto.precio}`);
// });

// const copiaCarrito = carrito.map(producto =>{
//     return `Producto: ${producto.nombre} fue comprado por la cantidad: ${producto.precio}`;
// });

// console.log(copiaCarrito);
// console.table(copiaCarrito);

// Método includes busca un elemento en el arreglo
// console.log(meses.includes("Abril") ? "Existe" : "No existe");

// Método some busca en un arreglo
console.log(carrito.some((producto) => producto.nombre == "Teclado marca Apwon"));

// Método "findIndex" regresa el índice del elemento del arreglo donde encuentra una coincidencia
meses.forEach((mes, index) =>{
    if (mes == "Febrero")
        console.log(`Encontrado en la posición ${index}`);
});

console.log(meses.findIndex(elemento => elemento === "Febrero"));

// Método "reduce"
let total = 0;
carrito.forEach(function(producto){
    total += producto.precio;
});

console.log(total);

let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// Método "filter" filtra los elementos del arreglo y obtinene una copia de aquellos elementos que pasen por el filtro

let resultado1 = carrito.filter((producto) => producto.precio > 2000);
let resultado2 = carrito.filter(producto => producto.precio > 2000 && producto.tipo === 1);
console.table(resultado1);
console.table(resultado2);
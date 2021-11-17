// *** ARREGLO DE NÚMEROS
const numeros = [100,13,25,14,18,90,14,12,20,9];

console.log(numeros);

numeros.forEach((numeros) =>{
    console.log(numeros);
});

// *** ARREGLO DE CADENAS
const meses = Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
// Añadir un elemento al final del arreglo
meses.push("No hay más")
console.log(meses.length);
// Añadir un elemento al principio del arreglo
meses.unshift("Cuesta de enero");
console.log(meses);
// Eliminar el elemento final de arreglo
meses.pop();
console.log(meses);
// Eliminar el elemento inicial del arreglo
meses.shift();
console.log(meses);
// Eliminar al medio del arreglo
meses.splice(2,1);
console.log(meses);

// Ordenar arreglos
const nombres = ["Andres", "Guadalupe", "Alondra", "José", "Andrea"];

console.log(numeros.sort(
    function (x, y){
        return x-y;
    }
));
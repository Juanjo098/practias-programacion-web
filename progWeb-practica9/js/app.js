/*Gestor de eventos
By: Juan José Silva López*/

// Declarar variables
const listaProductos = document.querySelector('.lista-productos');

cargarEventListeners();

function cargarEventListeners() {
    listaProductos.addEventListener("click", cargarProducto)
};


function cargarProducto(e){
    if (e.target.classList.contains('agregar-carrito') || e.target.parentNode.classList.contains('agregar-carrito'))
        console.log("Agregar a carrito");
}
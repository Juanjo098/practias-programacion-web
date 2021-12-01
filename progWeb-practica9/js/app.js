/*Gestor de eventos
By: Juan José Silva López*/

// Declarar variables
const listaProductos = document.querySelector('.lista-productos');
const miCarrito = document.querySelector('#mi-carrito');
const numeroProductos = document.getElementById('numero-producto');

let carrito = [];

cargarEventListeners();

function cargarEventListeners() {
    listaProductos.addEventListener("click", cargarProducto);
    document.addEventListener('DOMContentLoaded', () =>{
        carrito = JSON.parse(localStorage.getItem('carrito')) || 0;
        dibujarCarrito();
    })
};

function obtenerInformacionProducto(producto) {
    infoProducto = {
        imagen: producto.children[0].style.backgroundImage.replace(/"/g, ''),
        nombre: producto.querySelector('.info-producto h2').textContent,
        precio: producto.querySelector('.info-producto .precio-producto').textContent,
        cantidad: 1,
        id: producto.querySelector('a').getAttribute('data-id')
    }
    // Verificar si el producto ya existe en el carrito
    const existe = carrito.some(producto => producto.id === infoProducto.id);

    if (existe) {
        const copiaCarrito = carrito.map(prod => {
            if (prod.id == infoProducto.id)
                prod.cantidad += 1;
            return prod;
        });
        carrito = [...copiaCarrito];
    }
    else
        carrito = [...carrito, infoProducto];
}

function cargarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.parentElement.parentElement.parentElement.parentElement;
        obtenerInformacionProducto(producto);
        dibujarCarrito();
        sincronizarLocalStorage();
    }
    if (e.target.classList.contains('flaticon-shopping-bag')) {
        const producto = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        obtenerInformacionProducto(producto);
        dibujarCarrito();
        sincronizarLocalStorage();
    }
};

// Dibuja los productos del carrito en la parte superior
function dibujarCarrito() {
    limpiarCarritoHTML();
    carrito.forEach(producto => {
        const divHTML = document.createElement('div');
        divHTML.innerHTML = `<div class="dropdown-item d-flex align-items-start" href="#">
                                <div class="img" style="background-image: ${producto.imagen};"></div>
                                <div class="text pl-3">
                                    <h4>${producto.nombre}</h4>
                                    <p class="mb-0"><a href="#" class="price">${producto.precio}</a><span class="quantity ml-3">Quantity: ${producto.cantidad}</span></p>
                                </div>
                            </div>`;
        miCarrito.appendChild(divHTML);
    });
    miCarrito.appendChild(crearBrnVerCarrito());
    actualizarNumero();
}

// Limpia el contenido del carrito para volver a pintarlo
function limpiarCarritoHTML() {
    while (miCarrito.firstChild) {
        miCarrito.removeChild(miCarrito.firstChild);
    }
    // miCarrito.innerHTML = '';
}

function crearBrnVerCarrito() {
    const elementoA = document.createElement('a');
    elementoA.setAttribute("class", "dropdown-item text-center btn-link d-block w-100")
    elementoA.setAttribute("href", "cart.html")
    elementoA.text = "Ver el contenido del carito"

    const elementoSPAN = document.createElement('span');
    elementoSPAN.setAttribute("class", "ion-ios-arrow-round-forward")
    elementoA.appendChild(elementoSPAN);

    return elementoA;
}

// Función que actualiza el número de productos
function actualizarNumero() {
    numeroProductos.textContent = carrito.length;
}

function sincronizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
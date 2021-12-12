// Declarar variables
const miCarrito = document.querySelector('#mi-carrito');
const numeroProductos = document.getElementById('numero-producto');
const contenidoCarrito = document.querySelector('#contenido-carrito');

let carrito = [];

cargarEventListeners();

function cargarEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        dibujarCarrito();
        // Renderizar los renglones del contenido del carrito
        rederizarReglones();
    })
};

// Función que renderice los renglones del carrito
function rederizarReglones() {
    let subTotal = 0;
    let total = 0;
    let envio = 0;
    carrito.forEach(producto => {
        const trHTML = document.createElement('tr');
        trHTML.setAttribute('class', 'alert');
        trHTML.setAttribute('role', 'alerte');
        trHTML.innerHTML = `<td>
                                <label class="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" checked>
                                    <span class ="checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <div class="img" style="background-image: ${producto.imagen};"></div>
                            </td>
                            <td>
                                <div class="email">
                                    <span>${producto.nombre}</span>
                                    <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                                </div>
                            </td>
                            <td>$${producto.precio}</td>
                            <td class="quantity">
                                <div class="input-group">
                                    <input type="number" name="quantity" class="quantity form-control input-number"
                                        value="${producto.cantidad}" min="1" max="100">
                                </div>
                            </td>
                            <td>$${producto.cantidad * producto.precio}</td>
                            <td>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="fa fa-close"></i></span>
                                </button>
                            </td>`
        contenidoCarrito.appendChild(trHTML);
    });
}

// ----------------------------------------------------------------

// Dibuja los productos del carrito en la parte superior
function dibujarCarrito() {
    limpiarCarritoHTML();
    carrito.forEach(producto => {
        const divHTML = document.createElement('div');
        divHTML.innerHTML = `<div class="dropdown-item d-flex align-items-start" href="#">
                                <div class="img" style="background-image: ${producto.imagen};"></div>
                                <div class="text pl-3">
                                    <h4>${producto.nombre}</h4>
                                    <p class="mb-0"><a href="#" class="price">${producto.precio}</a><span class="quantity ml-3">Cantidad: ${producto.cantidad}</span></p>
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
const contenidoCarrito = document.querySelector('#contenido-carrito');
const miCarrito = document.querySelector('#mi-carrito');
const numeroProductos = document.getElementById('numero-producto');
const subtotal = document.querySelector('#subtotal');
const evnvio = document.querySelector('#envio');
const total = document.querySelector('#total');

let listaProductos = [];

// Eventos
cargarEventListeners();

function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded', () =>{
        listaProductos = JSON.parse(localStorage.getItem('carrito')) || [];
        dibujarProducto();
        calcularTotal();
        dibujarCarrito();
    });

    contenidoCarrito.addEventListener('input', (e) =>{
        const parent = e.target.parentNode.parentNode.parentNode;
        const index = indiceNodo(parent);
        listaProductos[index].cantidad = parseInt(e.target.value);
        dibujarCarrito();
        sincronizarLocalStorage();
        actualizarTotalProducto(index, parent, parseInt(e.target.value));
        calcularTotal();
    });

    contenidoCarrito.addEventListener('click', (e) =>{
        eliminarProducto(e);
        dibujarCarrito();
        calcularTotal();
        sincronizarLocalStorage();
    })
}

function dibujarProducto() {
    listaProductos.forEach(producto => {
        const tmp = document.createElement('tr');
        tmp.setAttribute("class", "alert");
        tmp.setAttribute("role", "alert");
        tmp.innerHTML = `                                
        <td>
            <label class="checkbox-wrap checkbox-primary">
                <input type="checkbox" checked>
                <span class="checkmark"></span>
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
        <td>${producto.precio}</td>
        <td class="quantity">
            <div class="input-group">
                <input type="number" name="quantity" class="quantity form-control input-number"
                    value="${producto.cantidad}" min="1" max="100">
            </div>
        </td>
        <td class="precio">${formatoMoneda(producto.precio * producto.cantidad)}</td>
        <td>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-close" onclick="eliminarProducto2(${producto.id})"></i></span>
            </button>
        </td>`;
        contenidoCarrito.appendChild(tmp);
    });
}

function formatoMoneda(cantidad) {
    let valor = (cantidad).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
    });
    return valor;
}

function calcularTotal() {
    let suma = 0;
    let envio;
    listaProductos.forEach(producto => {
        suma += (producto.precio * producto.cantidad);
    });
    envio = suma > 2000 ? 0 : 380;
    subtotal.textContent = formatoMoneda(suma);
    evnvio.textContent = formatoMoneda(envio);
    total.textContent = formatoMoneda(suma + envio);
    localStorage.setItem('infoPago', JSON.stringify({subtotal: suma, envio: envio, total: suma + envio}));
}

function indiceNodo(nodo){
    let nodeIndex;
    const parent = nodo.parentNode;
    for (let index = 0; index < parent.childNodes.length; index++) {
        if (nodo === parent.childNodes[index]){
            nodeIndex = index;
            break;
        }
    }
    return nodeIndex;
}

function actualizarTotalProducto(index, producto, cantidad) {
    producto.querySelector('.precio').textContent = formatoMoneda(listaProductos[index].precio * cantidad);
}

function sincronizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(listaProductos))
}

function eliminarProducto2(idProducto) {
    // listaProductos.splice(listaProductos.findIndex((producto) =>{
    //         producto.id == idProducto
    //     }), 1);
    listaProductos.filter((producto) =>{
        producto.id != idProducto;
    })
    dibujarCarrito();
    calcularTotal();
    sincronizarLocalStorage();
}

function eliminarProducto(e) {
    if (e.target.classList.contains('fa-close')){
        const index = indiceNodo(e.target.parentNode.parentNode.parentNode.parentNode);
        listaProductos.splice(index, 1);
    }
}

// 

function dibujarCarrito() {
    limpiarCarritoHTML();
    listaProductos.forEach(producto => {
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
    numeroProductos.textContent = listaProductos.length;
}
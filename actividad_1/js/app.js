// Se selecciona todo el contenido del formulario
const formulario = document.getElementById("form");

// Objeto utilizado para validar que el contenido de los inputs no se quede vacío
const inputs = {
    nombre: false,
    correo: false,
    telefono: false,
    mensaje: false
}

// Función que se activa cuando se hace click sobre un input del formulario
const numeroClicks = (e) =>{
    // Se valida que el evento provenga de un elemento con la clase "form-input"
    if (e.target.classList.contains('form-input'))
        console.log(`Se hizo click en el campo: ${e.target.name}`);
}

// Función que imprime en consola cuando se teclea dentro de un input del formulario
const teclaPrecionada = (e) =>{
    // Se valida que el evento provenga de un elemento con la clase "form-input"
    if (e.target.classList.contains('form-input'))
        console.log(`Se precionó una tecla en el campo: ${e.target.name}`);
}

// Función que se encarga de validar si el contenido del input que se la pasa como parámetro no es una cadena vacía
// Parámetros:
// input: nombre del input
// contenido: contenido del unput
function validarInput(input, contenido){
    // Se valida que la cadena que se le pasó como parámetro no esté vacía
    if (contenido !== "")
        // Si la cadena no está vacía, se define como "true" la variable correspondiente al nombre del input
        switch (input) {
            case 'nombre':
                inputs.nombre = true
                break;
            case 'mail':
                inputs.correo = true
                break;
            case 'telefono':
                inputs.telefono = true
                break;
            case 'mensaje':
                inputs.mensaje = true
        }
    else
        // Si la cadena está vacía, se define como "false" la variable correspondiente al nombre del input
        switch (contenido) {
            case 'nombre':
                inputs.nombre = false
                break;
            case 'mail':
                inputs.correo = false
                break;
            case 'telefono':
                inputs.telefono = false
                break;
            case 'mensaje':
                inputs.mensaje = false
        }
}

// Función que añade o remueve la clase "active" al label de los inputs del formulario para que el usuario sepa qué información debe ingresar
// después de que se borre el placeholder de los inputs.
const placeholder = (e) =>{
    // Variable que contendrá el label del input que generó el evento
    let label;
    // Se valida que el elemento que lanzó el evento contenga la clase "form-input"
    if (e.target.classList.contains('form-input')){
        // La variable lable se define como el nodo padre del input que lanzó el evento y luego se selecciona el label a través de la clase "label"
        label = e.target.parentNode.querySelector('.label');
        // Se valida si el input que lanzó el evento no contiene una cadena vacía
        if (e.target.value !== ''){
            // Si el input que lanzó el evento no contienen una cadena vacía, se le añade al label la clase "active"
            label.classList.add('active');
        }
        else{
            // Si el input que lanzó el evento conteiene una cadena vacía, se le remueve al label la clase "active"
            label.classList.remove('active');
        }
        validarInput(e.target.name, e.target.value);
    }
};

// Evento que se activa cada vez que se hace un clic dentro del formulario
formulario.addEventListener('click', numeroClicks);
// Evento que se activa cada vez que se preciona una tecla o si se corta el contenido del input
formulario.addEventListener('input', teclaPrecionada);
// Evento que se activa cada vez que se preciona una tecla o si se corta el contenido del input
formulario.addEventListener('input', placeholder);

// Evento que se activa cuando se oprime el botón "enviar" del formulario.
formulario.addEventListener('submit', (e) =>{
    // Método que evita que envie el contenido del formulario (añade un "#" en la URL de la página y la recarga)
    e.preventDefault();

    // Bandera utilizada para verificar que todos los campos hayan sido llenados
    let validado = true;
    // Array obtenido a partir del objeto "inputs"
    let contenidoInputs = Object.values(inputs);

    // Se recorre el arreglo "contenidoInputs" para ver´ficar que todos los inputs haya sido llenados
    for (let i = 0; i < contenidoInputs.length; i++) {
        // Si se encuentra un "false" en el arreglo "contenidoInputs", la bandera "validado" se ponen en falsa y se termina el ciclo
        if (!contenidoInputs[i]){
            validado = false;
            break;
        }
    }

    // Se valida el estado de la bandera "validado"
    if (validado){
         // Se seleccionan todos los inputs del formulario
        document.querySelectorAll('#form .form-input').forEach((input) =>{
        // Se presenta el contenido de los inputs
        console.log(input.value);
    });
    // Se remuve la clase "active" de todos los labels dentro del formulario
    document.querySelectorAll('.campo .label').forEach((label) =>{
        label.classList.remove('active');
    });
    // Mensaje que confirma el envio de los datos
    alert("Enviado correctamente");
    // Se borra el contenido de todos los inputs del formulario
    formulario.reset();
    }
    else
        // Mensaje de error presentado si se encontraron uno o más inpus vacíos
        alert("Asegúrse de que ningún campo está vacío");
})


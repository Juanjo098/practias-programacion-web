let carrera;

function mostrarDatos(){
    // alert('Desde la función mostrar');
    const colorFavorito = document.querySelector('.color_favorito');
    console.log(colorFavorito.value); //Mostando el valor en consola

    const fechaNacimiento = document.querySelector('.fecha-nacimiento');
    console.log(fechaNacimiento.value);

    const horaNacimiento = document.querySelector('.hora_nacimiento');
    console.log(horaNacimiento.value);

    const diaNacimiento = document.querySelector('#dia-nacimiento');
    console.log(diaNacimiento.value);

    const estadoAnimo = document.querySelector('.estado-animo');
    console.log(estadoAnimo.value);

    const estadoNacimiento = document.querySelector('.estado-nacimiento');
    console.log(estadoNacimiento.value);

    const lenguajeHTML = document.querySelector('.lenguaje-html');
    if(lenguajeHTML.checked){
        console.log(lenguajeHTML.value);
    }

    const CSS = document.querySelector('.css');
    if(CSS.checked){
        console.log(CSS.value);
    }

    const lenguajeJavascript = document.querySelector('.lenguaje-javascript');
    if(lenguajeJavascript.checked){
        console.log(lenguajeJavascript.value);
    }

    if(carrera != undefined){
        console.log(carrera);
    }
    else{
        alert('Please select');
    }


    // if (diaNacimiento.value < 1 || diaNacimiento.value > 30){
    //     alert('Fuera de rango');
    // }else{
    //     console.log(diaNacimiento.value);
    // }
}

function mostrarValor(objRange){
    console.log(objRange.value);
}

function seleccionCarrera(objRadio){
    carrera = objRadio.value;
}
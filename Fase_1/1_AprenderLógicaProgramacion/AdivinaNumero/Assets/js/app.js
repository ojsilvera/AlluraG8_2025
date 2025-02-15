//Con esto selecciono el selector con nombre h1, la seleccion puede ser el selector de una clase, id, etiqueta, etc.
let titulo = document.querySelector('h1');

//se le asigna el valor a la variable titulo para que aparezca en el documento html
titulo.innerHTML = "Juego adivina el numero";

//Con esto selecciono el selector p, la seleccion puede ser el selector de una clase, id, etiqueta, etc.
let inputTitle = document.querySelector('p');

//se le asigna el valor a la variable titulo para que aparezca en el documento html
inputTitle.innerHTML = "Elije el numero mayor para el rango a adivinar";

//establecemnos la funcion para el boton intentoUsuario
function intentoUsuario(){
    alert("Click desde el boton");
};

/*
//Solicita al usuario el valor maximo del rango a usar
let valorRangoMaximo = parseInt(prompt('Elige el valor maximo del numero a adivinar'));

// definimos la variable que almacena el numero a adivinar, el cual se genera obteniendo la parte entera de un numero
// random que va del 1 hasta el valor maximo determinado por el usuario
let numeroSecreto = Math.floor(Math.random() * valorRangoMaximo) + 1;

// estbalecemos el contador de intentos
let contador = 0;

// definiendo o inicializando la variable para el bucle while
let numeroUsuario = 0;

//maximo numero de intentos

let intentosMaximos = 3 ;

//Reglas del juego
alert(`Tienes ${intentosMaximos} intentos`);

alert(`El nuemro está entre 1 y ${valorRangoMaximo}`);

// ciclo de preguntas e intentos
while (numeroUsuario != numeroSecreto) {

    numeroUsuario = parseInt(prompt(`Digita un numero entre 1 y ${valorRangoMaximo}: `));

    if (numeroUsuario == numeroSecreto) {
        // le indica al usuario que acerto el numero secreto
        alert(` Has acertado El numero secreto es ${ numeroSecreto } `);

        contador++ ;

        alert(`lo has logrado en tu intento numero: ${contador}`);

    } else {
        //alert("No acertaste el numero secreto")
        if (numeroUsuario < numeroSecreto) {
            // le indica al usuario que su numero es menor que el numero secreto para que lo intente de nuevo
            alert("tu numero es menor que el numero secreto");
        } else {
            // le indica al usuario que su numero es mayor que el numero secreto para que lo intente de nuevo
            alert("Tu numero es mayor que el numero secreto");
        }

        contador++;

        if (contador < intentosMaximos) {

            alert(`Tienes: ${intentosMaximos - contador } Intentos restantes`);

        } else {

            alert(`Usaste ${intentosMaximos} intentos, perdiste, el numero secreto era ${numeroSecreto}`);

            break;
        }


    };

};
*/
// cambia el contenido de la etiqueta h1 por "Hora del Desafío"

let titleUser = document.querySelector('h1');
titleUser.innerHTML = 'Hora del Desafío';

// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function consoleUser(){
    console.log('El botón fue clicado');
}

/* Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
Luego, muestra una alerta con el mensaje, concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti". */

function prompUser(){
    let city = prompt('Escribe el nombre de una ciudad de Brasil');
    alert(`Estuve en ${city} y me acordé de ti`);
}
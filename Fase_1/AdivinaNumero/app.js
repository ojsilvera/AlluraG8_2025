// definimos la variable que almacena el numero a adivinar
let numeroSecreto = 6;

// Solicita al usuario un numero y lo carga en una variable llamada numeroUsuario
let numeroUsuario = prompt("Digita un numero entre 1 y 10: ");

// muestra el contenido de la variable en la consola del navegador se abre con F12 y menu consola o console
console.log(numeroUsuario);

//muestra el contenido de la variable en una alerta del navegador
alert(numeroUsuario);

// clausula de omparacion if nos permite comparar una variable con un dato y si se cumple genera un resultado esperado
// sino genera otro resultado

if (numeroUsuario == numeroSecreto) {
    // le indica al usuario que acerto el numero secreto
    alert(` Has acertado El numero secreto es ${ numeroSecreto } `);
} else {
//alert("No acertaste el numero secreto")
    if (numeroUsuario < numeroSecreto) {
        // le indica al usuario que su numero es menor que el numero secreto para que lo intente de nuevo
        alert("tu numero es menor que el numero secreto")
    } else {
        // le indica al usuario que su numero es mayor que el numero secreto para que lo intente de nuevo
        alert("Tu numero es mayor que el numero secreto")
    }
}

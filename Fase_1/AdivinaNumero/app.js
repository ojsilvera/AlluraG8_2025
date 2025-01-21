// definimos la variable que almacena el numero a adivinar
let numeroSecreto = 6;

// estbalecemos el contador de intentos
let contador = 0;

// definiendo o inicializando la variable para el bucle while
let numeroUsuario = 0;

// ciclo de preguntas e intentos
while (numeroUsuario != numeroSecreto) {

    numeroUsuario = prompt("Digita un numero entre 1 y 10: ");
    
    if (numeroUsuario == numeroSecreto) {
        // le indica al usuario que acerto el numero secreto
        alert(` Has acertado El numero secreto es ${ numeroSecreto } `);
        
        contador = contador + 1;
        
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
        
        contador = contador + 1;
        
        alert(`Este es tu intento numero: ${contador}`);
    };
    
};

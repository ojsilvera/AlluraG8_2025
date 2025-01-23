// definimos la variable que almacena el numero a adivinar, el cual se genera obteniendo la parte entera de un numero
// random que va del 0 hasta el valor maximo determinado que es 10
let numeroSecreto = Math.floor(Math.random() * 10);

// estbalecemos el contador de intentos
let contador = 0;

// definiendo o inicializando la variable para el bucle while
let numeroUsuario = 0;

//maximo numero de intentos

let intentosMaximos = 3 ;

alert(`Tienes 3 intentos, Buena suerte`)

// ciclo de preguntas e intentos
while (numeroUsuario != numeroSecreto) {

    numeroUsuario = prompt("Digita un numero entre 1 y 10: ");
    
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
            
            alert(`Tienes: ${intentosMaximos - contador }`);

        } else {
            
            alert(`Usaste ${intentosMaximos}, perdiste`);
            
            break;
        }
        
        
    };
    
};

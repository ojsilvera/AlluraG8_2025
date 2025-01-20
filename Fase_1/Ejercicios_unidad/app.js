// Ejercicios capitulo 1

// 1. Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".

alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// 2. Declara una variable llamada nombre y asígnale el valor "Lua".

let nombre = "Lua";

// 3. Crea una variable llamada edady asígnale el valor 25.

let edad = 25;

// 4. Establece una variable numeroDeVentas y asígnale el valor 50.

let numeroDeVentas = 50;

// 5. Establece una variable saldoDisponible y asígnale el valor 1000.

let saldoDisponible = 1000;

// 6. Muestra una alerta con el texto "¡Error! Completa todos los campos".

alert("¡Error! Completa todos los campos");

/*7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una
alerta con el valor de la variable mensajeDeError .*/

let mensajeDeError = "¡Error! Completa todos los campos";

alert(mensajeDeError);

// 8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.

let nombreUsuario = prompt("Nombre usuario: ");

/* 9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad. Ahora, si la edad es mayor
o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!". */

let edadUsuario = prompt("Digita tu edad: ");

if (edadUsuario >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!")
};

// Desafíos 2:

/* 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
De lo contrario, muestra "¡Buena semana!". */

let hoy = prompt('Digita que dia de la semana es, primera letra en mayusculas, sin punto, ni caracteres especiales, ni espacios: ')

if (hoy == "Sabado" | hoy == "Domingo") {
    
    alert('Que bien es fin de semana')

} else {
    
    alert('Que rinda la semana.......')

}

/* 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. */

let numero = prompt('Digita un numero, para evaluar si es 0, positivo o negativo')

if (numero > 0) {
    alert('Tu numero es positivo: ' + numero)
} else {
    if (numero < 0) {
        alert('Tu numero es negativo: ' + numero)
    } else {
        alert(`el numero que digitaste es ${numero} 0`)
    }
}

/* 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has
ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.". */

/* 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor
del saldo. */

/* 5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/

// definimos la variable que almacena el numero a adivinar
let numeroSecreto = 6;

// carga el numero digitado por el usuario en una variable llamada numeroUsuario
let numeroUsuario = prompt("Digita un numero: ");

// muestra el contenido de la variable en la consola del navegador
console.log(numerUsuario);

//muestra el contenido de la variable en una alerta del navegador
alert(numeroUsuario);

// clausula de omparacion if nos permite comparar una variable con un dato y si se cumple genera un resultado esperado
// sino genera otro resultado

if (numeroUsuario == numeroSecreto) {
    alert('Has acertado El numero secreto es ${numeroSecreto}');
}
// Ejercicios

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

let nombreUsuario = prompt("Nomre usuario: ")

/* 9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad. Ahora, si la edad es mayor
o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!". */

let edadUsuario = prompt("Digita tu edad: ")

if (edadUsuario >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!")
}
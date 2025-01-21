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

let hoy = prompt('Digita que dia de la semana es, primera letra en mayusculas, sin punto, ni caracteres especiales, ni espacios: ');

if (hoy == "Sabado" | hoy == "Domingo") {
    
    alert('Que bien es fin de semana')

} else {
    
    alert('Que rinda la semana.......')

};

/* 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. */

let numero = prompt('Digita un numero, para evaluar si es 0, positivo o negativo');

if (numero > 0) {
    alert('Tu numero es positivo: ' + numero)
} else {
    if (numero < 0) {
        alert('Tu numero es negativo: ' + numero)
    } else {
        alert(`el numero que digitaste es ${numero} 0`)
    }
};

/* 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has
ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.". */

let puntaje = prompt('Digita tu puntaje');

if (puntaje >= 100) {
    alert('¡Felicidades, has ganado!')
} else {
    alert('Intentalo nuevamente para ganar.')
}

/* 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor
del saldo. */

let mensaje = "Tu cuenta ha sido baneada por infringir los terminos de uso y condiciones"

alert(`Mensaje del sistema: ${mensaje}`);

/* 5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/

let userName = prompt('digita tu nombre: ');

alert(`Bienvenid@ ${userName} el sistema está en linea`)

//Desafio_3

/*Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.*/

let contador = 1;

while (contador <= 10) {

    alert(contador);

    contador = contador + 1;
    
};

/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.*/

let contadorInverso = 10;

while (contadorInverso >= 0) {

    alert(contadorInverso);

    contadorInverso = contadorInverso - 1;
    
};

/*Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese numero hasta 0 utilizando un bucle 'while' en
la consola del navegador.*/

let contadorMaximo = prompt('digita el tiempo maximo del contador');

while (contadorMaximo >= 0) {

    console.log(`Quedan: ${contadorMaximo} segundos`);

    contadorMaximo = contadorMaximo - 1;
    
};

/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en
la consola del navegador.*/

let contadorProgresivo = prompt('digita el tiempo maximo del contador');
let incremento = 0;

while (contadorProgresivo > incremento) {

    console.log(`Van: ${incremento} segundos`);

    incremento = incremento + 1;
    
};
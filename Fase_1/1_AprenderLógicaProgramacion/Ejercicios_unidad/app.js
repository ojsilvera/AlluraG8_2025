// Desafio 1::---------------------------------------------------------------------------------------------------------

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

// Desafíos 2:---------------------------------------------------------------------------------------------------------

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

// Desafio 3::---------------------------------------------------------------------------------------------------------

/*Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.*/

console.log("Bienvenidos");

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola,
[tu nombre]!" en la consola del navegador.*/

let miNombre = "Oscar";
console.log(miNombre);

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".*/

let miNombreAlert = "Oscar";
alert(`¡Hola, ${miNombreAlert}!`);

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la
respuesta en una variable y muestra la respuesta en la consola del navegador.*/

let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguaje);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza
la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para
mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor1 = 15;
let valor2 = 25;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza
la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log
para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor1Resta = 25;
let valor2Resta = 15;
let resultadoResta = valor1 + valor2;
console.log(`La resta de ${valor1Resta} y ${valor2Resta} es igual a ${resultadoResta}`);

/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona
es mayor o menor de edad y muestra un mensaje apropiado en la consola.*/

let edadUser = prompt('ingresa tu edad');
if (edadUser >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edada");
};

/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un
if-else y muestra el mensaje correspondiente.*/

let numeroUser = prompt('Digita un numero');
if (numeroUser == 0) {
    alert('el numero es cero y positivo');
} else {
    if (numeroUser > 0) {
        alert('Numero positivo');
    } else {
        alert('El numero es negativo');
    }
}

/*Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.*/

let contadorTimerUser = 0;
while (contadorTimerUser <= 10) {
    console.log(timerUser);
    contadorTimerUser++;
};


/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7
y muestra "Aprobado" o "Reprobado" en la consola.*/

let nota = Math.floor(Math.random()*10)+1;
if (nota>=7) {
    alert(`Aprobaste con nota de ${nota}`);
} else {
    alert(`No Aprobado con nota de ${nota}`);
};

/*Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.*/

let numeroRandom = Math.floor(Math.random()*100);
console.log(numeroRandom);

/*Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.*/

let numeroR = Math.floor(Math.random()*10)+1;
console.log(numeroR);

/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/

let numeroRmil = Math.floor(Math.random()*10000)+1;
console.log(numeroRmil);
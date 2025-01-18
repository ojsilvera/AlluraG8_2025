# Introduccion

En la fase numero 1 se desarrolla la logica de programacion iniciando con javascript y apoyandoce
en html y css.

Se propone el desarrollo de un proyecto inicial, que consiste en un juego de adivinanza de números,
donde un jugador intenta adivinar un número del 1 al 10 que ha sido anotado por otra persona.

la carpeta con el ejemplo del modulo se encuentra en AdivinaNumero, está conformada por los siguientes
archivos:

    index.html --> Contiene el documento de navigacion por parte del jugador.
    app.js     --> Contiene la logica de programacion.
    style.css  --> Contiene los estilos del documento de navegacion del jugador

los comentarios en javascript son con //texto o con /*texto*/
los comentarios en html <!-- texto -->

alert() nos permite mostrar una alerta en el navegador con la frase hola mundo, se encuentra emtre "" para
designar una cadena de texto, tambien se puede reemplazar con una variable que contenga un numero o
un texto, sintaxys:

    alert("Hola mundo");

Para interpolar una variable en el texto que se muestra con el alert usamos comillas simples '' y el signo
$ seguido de llaves {} en el cetro de las llaves la variable ${variable}

    alert('Has acertado El numero secreto es ${numeroSecreto}')

promp() nos permite obtener informacion del usuario o que el usuario envie informacion a la aplicacion
o la pagina

    prompt("Digita un numero: ");

la salida del prompt sino se almacena en una variable se pierde, la forma de declarar una variable en
js seria:

    const:  se utiliza para declarar variables que no se pueden reasignar. Al igual que let, tiene un
    alcance de bloque. Sin embargo, es importante notar que si la variable es un objeto o un array,
    puedes modificar sus propiedades o elementos, pero no puedes reasignar la variable a un nuevo
    objeto o array.

    let: permite declarar variables con un alcance de bloque. Esto significa que la variable solo estará
    disponible dentro del bloque donde fue definida (por ejemplo, dentro de un if o un for). A diferencia
    de var, no se puede redeclarar la misma variable en el mismo bloque.

    var: tienen un alcance global o de función, lo que significa que pueden ser accesibles fuera del
    bloque en el que fueron definidas. Además, var permite redeclarar la misma variable sin errores.

console.log(variable o texto) nos permite mostrar un mensaje o variable en la consola del navegador,
para acceder a esta se presiona la tecla f12

Estructura condicional if, que permite comparar el número ingresado por el usuario con un número secreto
almacenado en otra variable.

es una estructura de control que permite ejecutar un bloque de código solo si se cumple una condición
específica. Es fundamental en la lógica de programación, ya que permite tomar decisiones basadas en
condiciones.

if (condición) {
    // bloque de código a ejecutar si la condición es verdadera
}

Usar dos signos de igual para comparar valores, a diferencia de un solo signo que se utiliza para asignar
valores.

if ( numero1 == numero2 ) {
    // bloque de código a ejecutar si la condición es verdadera
}

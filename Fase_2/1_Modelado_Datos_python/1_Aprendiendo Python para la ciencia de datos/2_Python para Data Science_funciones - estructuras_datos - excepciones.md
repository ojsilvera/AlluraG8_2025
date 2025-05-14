# Python para Data Science funciones - estructuras_datos - excepciones

## Bibliotecas

### Presentacion

* Curso enfocado en **Python aplicado a Data Science**.
* Herramienta práctica: **Google Colab**.

---

#### 1. **Funciones en Python**

* **Funciones incorporadas (built-in):**

  * Vienen por defecto en Python, no requieren importación.
  * Ej: `print()`, `len()`, `sum()`.

* **Funciones personalizadas:**

  * Definidas por el usuario con `def`.
  * Pueden o no retornar valores (`return`).

* **Funciones lambda:**

  * Funciones **anónimas** y concisas.
  * Útiles como **parámetros** de otras funciones, especialmente al trabajar con colecciones.

---

#### 2. **Estructuras de datos (colecciones)**

* **Listas:**

  * Secuencias **mutables**.
  * Se pueden recorrer, actualizar o modificar libremente.
  * Versátiles en ciencia de datos.

* **Tuplas:**

  * Secuencias **inmutables**.
  * No se pueden modificar, pero sí recorrer y consultar.

* **Diccionarios:**

  * Colecciones de **pares clave\:valor**.
  * Muy útiles para representar datos estructurados.

* **Estructuras anidadas:**

  * Combinaciones de colecciones dentro de otras (ej: listas de diccionarios, tuplas de listas).

* **Comprensión de listas y diccionarios:**

  * Forma **concisa y legible** de crear nuevas colecciones.
  * Aumenta la eficiencia y claridad del código.

---

#### 3. **Manejo de excepciones**

* Introducción básica a cómo **gestionar errores** en el código.
* Permite:

  * Prevenir la interrupción del programa.
  * Mostrar mensajes explícitos.
  * Saltar pasos no críticos en caso de fallos.

---

#### ⚙️ Herramienta utilizada

* **Google Colab:** entorno en línea para codificar en Python sin necesidad de instalaciones locales.

---

### Importando bibliotecas

* Se recomienda usar **Google Chrome** para acceder a **Google Colab**:
  👉 [colab.research.google.com](https://colab.research.google.com)
* Colab permite abrir notebooks desde:

  * Google Drive
  * GitHub (si está conectado a tu cuenta)
  * Subida directa desde tu máquina local

#### 💻 Uso de Google Colab

* Utiliza una **máquina virtual con Python 3 ya instalado**
* Ventajas:

  * No requiere instalación local
  * Ahorro de recursos del computador propio
  * Acceso gratuito a:

    * \~13 GB de RAM
    * \~107 GB de almacenamiento

#### 🧰 Entorno de desarrollo

* No se profundiza en la interfaz de Colab, ya cubierta en un entrenamiento anterior.
* Python permite trabajar con **bibliotecas (librerías)**, que contienen módulos y funciones reutilizables.

##### 📦 Instalación de bibliotecas en Colab

* Se usa `pip` para instalar paquetes desde el sistema Linux subyacente:

  ```python
  !pip install matplotlib
  ```

* El símbolo `!` ejecuta comandos del sistema operativo desde la celda del notebook.

##### 🔍 Verificación de la instalación y versión

1. Intentar consultar versión directamente da error si no se ha **importado** la biblioteca:

   ```python
   import matplotlib
   matplotlib.__version__
   ```

2. Importación con alias (buena práctica para gráficos):

   ```python
   import matplotlib.pyplot as plt
   ```

##### 🗂 Repositorio PyPI (Python Package Index)

* Se accede a [pypi.org](https://pypi.org) para ver:

  * Descripción de paquetes
  * Historial de versiones
  * Documentación y enlaces útiles

#### Versión de ejemplo

* **Versión actual**: `3.8.1`
* **Colab usa** por defecto: `3.7.1`

  * Esto se debe a prácticas de **estabilidad y compatibilidad**.

##### 🔄 Instalación de versión específica

Para asegurar compatibilidad entre desarrolladores (serialización de entornos):

```python
!pip install matplotlib==3.8.1
```

* Requiere:

  * Desinstalación de versión anterior
  * **Reinicio del entorno de ejecución**:

    * Menú: Entorno de ejecución → Reiniciar entorno
    * O botón directo en Colab

##### 📊 Submódulo pyplot

* **pyplot** es el submódulo más usado para graficar en Python.
* Importación recomendada:

  ```python
  import matplotlib.pyplot as plt
  ```

* Permite acceder a métodos como:

  ```python
  plt.show()
  ```

##### 🧠 Buenas prácticas destacadas

* Importar solo lo necesario (submódulos, no toda la biblioteca)
* Usar alias para facilitar el código (`as plt`)
* Trabajar con versiones estables o forzar versiones específicas para evitar errores futuros

---

##### Pip y PyPi

El PIP es un administrador de paquetes para Python. A través de él, tenemos acceso a las bibliotecas ya instaladas en
nuestra aplicación junto con la versión de cada una de ellas. Desde las líneas de comandos, podemos instalar, actualizar
y eliminar paquetes de Python. Con pip, podemos instalar fácilmente paquetes de terceros en proyectos de Python.

Para acceder a todos los paquetes instalados en nuestro Jupyter Notebook en Colab, podemos escribir el siguiente código:

Imprimir todos los paquetes instalados en el entorno y sus versiones:

```Python
   !pip install pandas==1.5.0
```

pip funciona conectándose al Python Package Index (PyPI), que es el repositorio centralizado más grande para paquetes de
Python con miles de bibliotecas disponibles para la instalación. Podemos buscar en PyPI para encontrar paquetes que
satisfagan nuestras necesidades y luego usar pip para instalarlos en nuestros proyectos.

PyPI es mantenido por la Python Software Foundation y contiene una amplia variedad de paquetes de Python. En él, se publican
paquetes de Python para que otros desarrolladores puedan usarlos. Por lo tanto, pip y PyPI son dos herramientas importantes
en Python.

#### Bibliotecas o modulos

---

##### 📌 Importación de Módulos

* **Módulos o bibliotecas**: Conjunto de funciones y métodos que facilitan operaciones específicas y reducen la cantidad de código.
* **Importación**:

  * `import matplotlib.pyplot as plt`
  o
  * `from matplotlib import pyplot as plt`

  Ambas sintaxis importan el submódulo `pyplot` de `matplotlib`, usado para visualizaciones.

##### 📊 Ejemplo con Matplotlib

* **Caso práctico**: Visualizar notas de estudiantes en un gráfico de barras.
* **Datos**:

  ```python
  estudiantes = ["Juan", "Maria", "José"]
  notas = [9, 8.5, 6.5]
  ```

* **Gráfico de barras**:

  ```python
  plt.bar(estudiantes, notas)
  plt.show()
  ```

##### 🎲 Selección Aleatoria con Random

* Se agrega un nuevo estudiante: `"Erica"`.
* **Importación del módulo**:

  * Completa: `import random`
  * Específica: `from random import choice`
* **Uso de `choice`**:

  ```python
  estudiante = choice(estudiantes2)
  print(estudiante)
  ```

  * Elige aleatoriamente un elemento de una secuencia no vacía.
  * Se puede consultar la documentación con `help(choice)`.

##### 🧠 Buenas prácticas

* **Consultar la documentación**: clave para entender cómo funcionan los métodos y módulos.
* **Funciones nativas de Python**: Algunas tareas comunes ya están incluidas sin necesidad de importar bibliotecas

##### ✅ Conceptos Relacionados

| Concepto            | Relación                                                                 |
| ------------------- | ------------------------------------------------------------------------ |
| Módulo              | Unidad de funcionalidad importable en Python                             |
| Biblioteca          | Conjunto organizado de módulos                                           |
| `matplotlib.pyplot` | Submódulo para visualización de datos con gráficos                       |
| `random`            | Biblioteca para generar datos aleatorios                                 |
| `choice`            | Función para seleccionar aleatoriamente un elemento de una secuencia     |
| `help()`            | Función integrada para acceder a documentación directamente en el código |

---

#### Utilizando bibliotecas y modulos

##### 🔹 Importación y uso de módulos

* **Módulos o bibliotecas** en Python son conjuntos de funciones y métodos que permiten reducir el volumen de código al
  reutilizar funcionalidades ya desarrolladas.
* Se pueden **importar de varias formas**, por ejemplo:

  ```python
  import matplotlib.pyplot as plt
  # o
  from matplotlib import pyplot as plt
  ```

###### 📊 Ejemplo con Matplotlib: Visualización de datos

* Se usó `matplotlib.pyplot` para graficar **notas de estudiantes**:

  * Lista de estudiantes: `["Juan", "Maria", "José"]`
  * Lista de notas: `[9, 8.5, 6.5]`
* Se generó un **gráfico de barras** con:

  ```python
  plt.bar(estudiantes, notas)
  plt.show()
  ```

##### 🎲 Ejemplo con Random: Selección aleatoria

* Se utilizó el módulo `random` para seleccionar un estudiante al azar de una lista:

  * Se añadió a "Erica" a una nueva lista `estudiantes2`.
  * Se usó la función `choice` de forma directa:

    ```python
    from random import choice
    estudiante = choice(estudiantes2)
    print(estudiante)
    ```

##### 📘 Consulta de documentación

* Se destaca la importancia de **consultar la documentación** para entender el funcionamiento de módulos y funciones:

  * Ejemplo:

    ```python
    help(choice)
    ```

  * Esto muestra una descripción del método `choice` y su uso.

##### ⚙️ Funciones nativas en Python

* No siempre es necesario importar módulos para tareas comunes, ya que **Python incluye funciones integradas** para muchas
  operaciones básicas.
* Este tema se profundizará en la próxima clase.

---

#### Otras formas d eimportar

Ya hemos trabajado con dos formas de importar paquetes: import nombre_biblioteca para todo el paquete y from nombre_biblioteca
import metodo para solo un método de una biblioteca dada.

La importación de métodos específicos de una biblioteca puede tener algunas ventajas para nuestro proyecto, como:

Economía de memoria: cuando importamos una biblioteca completa, todo su código se carga en la memoria, incluso si no utilizamos
todos sus métodos. Importar solo los métodos que necesitamos puede ahorrar memoria, especialmente en programas con grandes bibliotecas.
Mayor claridad en el código: importar solo los métodos que vamos a usar hace que el código sea más claro y fácil de entender.

Reducción de conflictos de nombres: al importar una biblioteca completa, podríamos tener conflictos de nombres con otras
variables o funciones en nuestro código.

Reducción en el tiempo de ejecución: como no se importa toda la biblioteca, el tiempo de ejecución del programa puede ser
más rápido, ya que se carga y se interpreta menos código en la memoria por el intérprete de Python.

Además de las formas vistas anteriormente, podemos mencionar dos ejemplos que podríamos encontrar en sus prácticas y estudios del lenguaje Python:

from nombre_biblioteca import met_1, met_2

Este código resulta en la importación de 2 o más métodos de una biblioteca, evitando repetir la importación cada vez que
se desee un método. Por ejemplo, podríamos importar 2 métodos de la biblioteca random para tomar una muestra de 5 valores
de una lista de 20 valores generada aleatoriamente con números del 0 al 99.

from random import randrange, sample

lista = []

for i in range(0, 20):
  lista.append(randrange(100))

sample(lista, 5)
Copia el código
Salida: [28, 66, 53, 81, 85]

from nombre_biblioteca import *

Esta forma se utiliza para importar todos los métodos de una biblioteca dada. La diferencia con import nombre_biblioteca
es que, en este caso, no necesitamos usar el nombre de la biblioteca para llamar a un método. Podemos pasar solo su nombre.

Por ejemplo, si vamos a calcular la raíz cuadrada de un cierto número, podríamos seguir una de las dos formas:

Usando import nombre_biblioteca:

import math

n = int(input("Digite um número positivo para calcular sua raiz quadrada:"))
print(f"\nA raiz quadrada de {n} é igual a {math.sqrt(n)}")

Usando from nombre_biblioteca import *:

from math import *

n = int(input("Digite um número positivo para calcular sua raiz quadrada:"))
print(f"\nA raiz quadrada de {n} é igual a {sqrt(n)}")

Observa que, en el segundo ejemplo, hemos omitido el nombre math utilizando el método deseado y escribiendo el código con menos caracteres.

Nota: La importación en este sentido requiere ciertos cuidados:

Podríamos tener conflictos de nombres entre las variables. Por ejemplo, si tenemos una función llamada sqrt antes de importar
la de la biblioteca math. Podríamos reducir la eficiencia de la ejecución si el número de funciones importadas es grande.
No queda explícito de dónde proviene esa variable, método o clase.

## Funciones

### Funciones incorporadas

---

#### ✅ ¿Es siempre necesario importar módulos?

* **No siempre.** Python cuenta con funciones que **ya están integradas** en el lenguaje, conocidas como **Built-in Functions**.
* Estas funciones no requieren ninguna importación previa.

---

#### 🔁 ¿Qué es una función?

* Una **función** es una **secuencia de instrucciones reutilizables** que pueden:

  * Recibir entradas (parámetros)
  * Retornar o no un valor de salida
  * Ser invocadas varias veces

---

### 🧰 Funciones incorporadas destacadas

| Función   | Uso principal                          |
| --------- | -------------------------------------- |
| `abs()`   | Valor absoluto                         |
| `bool()`  | Convertir a booleano                   |
| `chr()`   | Convertir a carácter                   |
| `dict()`  | Crear diccionarios                     |
| `print()` | Imprimir en pantalla                   |
| `len()`   | Obtener longitud de un objeto          |
| `sum()`   | Sumar elementos de un iterable         |
| `round()` | Redondear un número a cierta precisión |

Estas funciones están documentadas en el sitio oficial de Python y **pueden utilizarse sin importar módulos**.

---

#### 📘 Ejemplo aplicado: Cálculo de promedio de notas

1. **Estructura de datos usada:**
   Se utiliza un **diccionario** donde las claves representan trimestres y los valores las notas.

2. **Cálculo con acumulador manual:**

   ```python
   suma = 0
   for s in notas.values():
       suma += s
   promedio = suma / len(notas)
   ```

3. **Cálculo con funciones incorporadas:**

   ```python
   promedio = sum(notas.values()) / len(notas)
   promedio = round(promedio, 1)
   ```

   Resultado: `8.2` (redondeado desde `8.16`)

---

#### 💡 Buenas prácticas

* **Consultar la documentación** oficial para descubrir y entender las funciones nativas.
* **Usar funciones incorporadas** para mantener el código más simple, claro y eficiente.
* **Evitar duplicación de código** usando funciones en lugar de repetir instrucciones.

---

### Creando funciones

Este contenido explica la **importancia de definir funciones personalizadas en Python**, especialmente cuando las funciones
integradas no son suficientes. Se abordan conceptos fundamentales como la **sintaxis, tipos de funciones, paso de parámetros**
y el **alcance (scope)** de las variables dentro de funciones.

---

#### 🔹 Funciones sin parámetros

* No reciben *input*.
* Se definen con `def nombre():`.
* Ejemplo: calcular e imprimir el promedio de tres valores fijos.

```python
def promedio():
    calculo = (10 + 9 + 7) / 3
    print(calculo)  # Salida: 8.66
```

---

#### 🔹 Funciones con parámetros

* Reciben valores definidos al momento de la ejecución.
* Se definen con `def nombre(param1, param2, ...)`.
* Permiten reutilización con diferentes entradas.

```python
def promedio(nota1, nota2, nota3):
    calculo = (nota1 + nota2 + nota3) / 3
    print(calculo)
```

* **Llamado por posición**:

  ```python
  promedio(10, 9, 7)
  ```

* **Llamado por nombre** (útil cuando el orden importa):

  ```python
  promedio(nota2=9, nota1=10, nota3=7)
  ```

---

#### 🔄 Funciones con listas como parámetro

Permiten calcular promedios sin restringirse a una cantidad fija de notas:

```python
def promedio(lista):
    calculo = sum(lista) / len(lista)
    print(calculo)
```

* Flexible ante listas de cualquier longitud:

  ```python
  notas = [9.5, 8.7, 7.0, 8.3]
  promedio(notas)  # Salida: 8.375
  ```

---

#### 🧠 Importancia del **scope** o **alcance** de variables

* Las variables definidas **dentro** de una función **no existen fuera** de ella.
* Si se imprime un valor dentro de una función (`print()`), este **no puede ser reutilizado directamente** en el código exterior.

Ejemplo del problema:

```python
def promedio(lista):
    calculo = sum(lista) / len(lista)
    print(calculo)

media = promedio(notas)
print(media)  # Imprime None
```

* La variable `calculo` está **dentro del ámbito de la función**, por lo que no es accesible luego de su ejecución.
* Para **almacenar resultados**, se debe usar `return` en lugar de `print()`.

---

#### 🧪 Conclusión

* Entender la **sintaxis y uso de parámetros** permite crear funciones más reutilizables y eficientes.
* Es crucial comprender el **alcance de las variables** en funciones para evitar errores como `NoneType`.
* La correcta implementación de funciones mejora la escalabilidad y claridad del código.

---

### Return

#### 1. **Alcance de una Variable (Scope)**

* Las variables **definidas dentro de una función** tienen un **alcance local**.
* Estas variables **solo existen durante la ejecución** de la función.
* Al finalizar la ejecución, la variable **desaparece**.

#### 2. **Uso del `return`**

* Para conservar una variable creada dentro de una función, se utiliza `**return**`.
* `return` permite **extraer valores fuera del alcance local** y **asignarlos a otras variables**.

#### 3. **Cálculo del Promedio**

* Se define una función `promedio(lista)` que:

  * Calcula el promedio: `suma(lista) / len(lista)`
  * Retorna ese valor usando `return resultado`

```python
def promedio(lista):
    resultado = sum(lista) / len(lista)
    return resultado
```

#### 4. **Retornar Múltiples Valores**

* Para retornar **el promedio** y **la situación del estudiante** (aprobado/reprobado):

  * Se define una variable `situacion` según el promedio.
  * Se retorna una **tupla** con ambos valores.

```python
def boletin(lista):
    resultado = sum(lista) / len(lista)
    if resultado >= 7:
        situacion = "aprobado"
    else:
        situacion = "reprobado"
    return resultado, situacion
```

#### 5. **Impresión de Resultados con `format()`**

* Se usa `print()` y `str.format()` para mostrar un mensaje personalizado:

```python
resultado, situacion = boletin(notas)
print("El o la estudiante obtuvo un puntaje de {:.2f} y su situación es {}.".format(resultado, situacion))
```

#### 6. **Retornar el Mensaje Directamente**

* Alternativamente, la función puede **retornar el mensaje final** directamente.

```python
def boletin(lista):
    resultado = sum(lista) / len(lista)
    situacion = "aprobado" if resultado >= 7 else "reprobado"
    return "El o la estudiante obtuvo un puntaje de {:.2f} y su situación es {}.".format(resultado, situacion)
```

#### ✅ Aplicación Práctica

* Se crean listas con diferentes notas para probar la función `boletin()`.
* Se comprueba si el estudiante aprueba o reprueba según el promedio calculado.

#### 💡 Reflexión Final

* Aunque definir funciones ofrece control y claridad, en algunos casos pueden existir **métodos más simples** para resolver problemas con funciones.
* Esto será explorado en el siguiente video.

---

### Lambda

#### 🔍 ¿Qué son las funciones Lambda?

Las **funciones Lambda** en Python son funciones **anónimas** que:

* No necesitan definirse usando `def`.
* Se escriben en **una sola línea**.
* Tienen la forma:

  ```python
  lambda parámetros: expresión
  ```

#### 🧪 Ejemplo 1: Sumar un valor a una nota

* Función tradicional:

  ```python
  def cualitativa(nota):
      return nota + 0.5
  ```

* Función Lambda equivalente:

  ```python
  cualitativa = lambda x: x + 0.5
  ```

#### 🧮 Ejemplo 2: Promedio Ponderado

Se construyó una **calculadora de promedio ponderado** con pesos asignados a 3 notas:

* Pesos:

  * n1 × 3
  * n2 × 2
  * n3 × 5
* Función Lambda:

  ```python
  ponderado = lambda x, y, z: (x*3 + y*2 + z*5) / 10
  ```

#### 📊 Ejemplo 3: Sumar un puntaje extra a una lista de notas

Cuando se trabaja con listas de datos, se debe **mapear** la función Lambda a cada elemento:

#### ✅ Paso 1: Lista de calificaciones

```python
notas = [6, 7, 9, 5.5, 8]
```

#### ✅ Paso 2: Uso de `map()` con Lambda

```python
Notas_Actualizadas = list(map(lambda x: x + 0.5, notas))
```

#### 🔄 Resultado

```python
[6.5, 7.5, 9.5, 6.0, 8.5]
```

---

#### ✅ Conclusiones

* Las funciones Lambda son ideales para tareas simples, rápidas y sin la necesidad de definir funciones completas.
* Son **muy útiles** en Ciencia de Datos cuando se necesitan aplicar transformaciones ligeras a los datos.
* Para trabajar con **listas o iterables**, es necesario usar `map()` junto a Lambda.
* Se pueden emplear en cálculos como promedios, transformaciones cualitativas, ajustes a listas, etc.

---

## Estructuras de datos

### Listas de listas

La lección trata sobre **estructuras de datos compuestas**, específicamente sobre **listas anidadas** en Python, y cómo
manipularlas para separar información contenida en una estructura compleja.

---

#### 1. **Estructuras de Datos Anidadas**

* Una **lista de listas** es un tipo común de estructura compuesta.
* Cada elemento de la lista principal puede ser a su vez una lista (ej. calificaciones de estudiantes).

#### 2. **Caso Práctico**

Transformar una lista lineal de estudiantes y sus calificaciones, tipo:

```python
Notas_Grupo = ['Ana', 8, 9, 10, 'Luis', 9, 7, 6, ...]
```

En:

* Una **lista con nombres separados**
* Una **lista de listas** con sus respectivas tres calificaciones

---

#### ⚙️ Procedimiento Paso a Paso

#### 🪪 Separar nombres

1. Crear dos listas vacías: `Nombres` y `Notas`.
2. Iterar con `range(len(Notas_Grupo))`.
3. Usar el **módulo (mod)** para identificar los nombres:

   ```python
   if i % 4 == 0:
       Nombres.append(Notas_Grupo[i])
   else:
       Notas.append(Notas_Grupo[i])
   ```

#### 📊 Agrupar calificaciones

1. Crear lista vacía `Notas_Separadas`.
2. Iterar sobre `Notas` de tres en tres:

   ```python
   for i in range(0, len(Notas), 3):
       Notas_Separadas.append([Notas[i], Notas[i+1], Notas[i+2]])
   ```

#### 🧪 Validación y Corrección

* Se prueba el código y se corrige un error al usar `append` con múltiples argumentos: se debe pasar como **una lista**.

---

#### ✅ Resultados Obtenidos

* `Nombres`: lista con solo los nombres de los estudiantes.
* `Notas_Separadas`: lista de listas con las tres calificaciones por estudiante.

---

#### 🧩 Reflexión

Este ejercicio muestra cómo:

* Resolver problemas comunes en **preparación de datos**.
* Usar estructuras de control y funciones como `%`, `append()` y `range()` para manipular listas.
* Afrontar errores durante el desarrollo y solucionarlos de forma iterativa.

---

### Listas de tuplas

* **Lista**: Estructura de datos **mutable**. Permite almacenar diferentes tipos de datos (números, cadenas, otras listas, etc.).
* **Tupla**: Estructura de datos **inmutable**. Una vez creada, no puede modificarse. Es útil para datos que no deben cambiar.

---

#### 🛠️ Caso Práctico

**Objetivo**: Generar una lista de tuplas con el **nombre de cada estudiante** y un **código ID único** para una plataforma de análisis de datos.

#### 📥 Entrada

* Lista de nombres de estudiantes (`nombres`).

#### 📤 Salida

* Lista de tuplas `[(nombre, código_id), ...]`, donde `código_id = primera_letra_nombre + número_aleatorio`.

---

#### ⚙️ Proceso Paso a Paso

1. **Importar la función `randint`** desde la biblioteca `random` para generar números aleatorios en el rango `0-999`.

2. **Crear una función auxiliar `genera_numero()`**:

   ```python
   def genera_numero():
       return randint(0, 999)
   ```

   Esta función retorna un número aleatorio cada vez que se llama.

3. **Crear una lista vacía `codigos_estudiantes`** para almacenar las tuplas.

4. **Iterar sobre la lista de nombres**:

   * Extraer el nombre.
   * Obtener la **primera letra** del nombre.
   * Concatenar esta letra con un número aleatorio convertido a cadena.
   * Crear la tupla `(nombre, codigo_id)` y añadirla a la lista.

   ```python
   for i in range(len(nombres)):
       codigo = nombres[i][0] + str(genera_numero())
       codigos_estudiantes.append((nombres[i], codigo))
   ```

---

#### 💡 Reflexión Final lista tuplas

Se menciona que este tipo de operación (crear listas iterando con `for` y `append`) es muy común, pero se anticipa que
existen **formas más concisas y eficientes** de lograr lo mismo sin necesidad de inicializar listas vacías y usar `for`
tradicionales —lo cual será abordado en la próxima lección.

---

## Estructuras anidadas

### List comprenhension

La **comprensión de listas** (*list comprehension*) es una forma **concisa, legible y eficiente** de construir listas en
Python aplicando operaciones, condicionales o bucles directamente en una única línea de código.

---

#### 🧰 Sintaxis Básica

  ```python
  [expresión for elemento in iterable if condición]
  ```

* Permite aplicar **operaciones** y **condiciones** a los elementos de una secuencia para construir nuevas listas.
* Mejora la **legibilidad del código**.

---

#### 🧪 Caso Práctico

#### 🎯 Objetivo

* Calcular el **promedio de calificaciones** de estudiantes a partir de una lista de listas.
* Seleccionar estudiantes con promedio ≥ 8 para optar por una **beca académica**.

#### 🧮 Paso a Paso

1.**Calcular el promedio redondeado a un decimal**:

  ```python
  promedios = [round(promedio(calificacion), 1) for calificacion in calificaciones]
  ```

2.**Extraer los nombres de una lista de tuplas (nombre, código)**:

  ```python
  nombres = [nombre[0] for nombre in datos_estudiantes]
  ```

3.**Unir nombres y promedios utilizando `zip()`**:

  ```python
  estudiantes = list(zip(nombres, promedios))
  ```

4.**Filtrar estudiantes con promedio ≥ 8 usando comprensión de listas con condición**:

  ```python
  candidatos = [est[0] for est in estudiantes if est[1] >= 8]
  ```

---

#### 🔍 Funciones Clave Utilizadas

| Función                   | Descripción                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| `round(valor, decimales)` | Redondea un número a la cantidad de decimales especificados.            |
| `zip(lista1, lista2)`     | Une elementos de múltiples iterables en tuplas.                         |
| `list()`                  | Convierte un objeto iterable (como el resultado de `zip`) en una lista. |

---

#### ✅ Resultados

* Se obtuvo una lista de promedios por estudiante.
* Se filtraron correctamente los estudiantes **Juan** y **Ana**, quienes cumplen con el criterio de promedio ≥ 8.

---

#### 📌 Conclusión

La comprensión de listas permite **manipular estructuras de datos de forma elegante** y **potente**. Aunque en este ejemplo se utilizó con una simple condición `if`, es posible combinarla con `else` para estructuras más complejas (tema de la próxima lección).

### List comprenhension con if & else

Se plantean dos nuevas tareas sobre el mismo proyecto relacionado con el manejo de datos de estudiantes:

1. **Crear una lista de la situación académica** de cada estudiante según su promedio:

   * Si el promedio es `≥ 7`: el estudiante está **"aprobado"**.
   * Si el promedio es `< 7`: el estudiante está **"reprobado"**.

2. **Generar listas estructuradas**:

   * Lista de **tuplas** con el nombre y código de cada estudiante.
   * Lista con las **notas** de cada estudiante.
   * Lista con los **promedios**.
   * Lista con la **situación académica** determinada previamente.

---

#### 🧮 Construcción de Listas

#### 1. Listas base

* `nombres`: lista con los nombres de los estudiantes.
* `notas`: lista con las notas (listas anidadas).
* `promedios`: lista de promedios por estudiante.

#### 2. Lista de situación

Se crea usando **comprensión de listas** con `if-else`:

```python
situacion = ["aprobado" if promedio >= 7 else "reprobado" for promedio in promedios]
```

#### 3. Lista de listas o `registros`

Se combinan `nombres`, `notas`, `promedios` y `situacion` en una sola estructura:

```python
registros = [[nombre, nota, promedio, estado]
             for nombre, nota, promedio, estado in zip(nombres, notas, promedios, situacion)]
```

🔹 También se puede construir **sin comprensión de listas**, utilizando corchetes de forma manual para simplificar la lectura.

---

#### 🔄 Notas sobre aleatoriedad

* Los **códigos de los estudiantes** fueron generados de forma aleatoria mediante una función `random`.
* Por lo tanto, estos códigos **cambiarán** en cada ejecución del script.

---

### diccionary comprenhension

Claro, aquí tienes el resumen solicitado en formato **Markdown**, destacando y relacionando los conceptos más importantes del texto:

---

## 🧾 Resumen: Comprensión de Diccionarios y Generación de Registros en Python

### 📌 ¿Qué es la Comprensión de Diccionarios?

* Es una **extensión sintáctica de la comprensión de listas**.
* Permite crear diccionarios de forma compacta y eficiente.
* Sintaxis básica:

  ```python
  {clave: valor for elemento in iterable}
  ```

---

### 🧪 Caso Práctico: Generación de un Diccionario para Análisis de Datos

Construir un **diccionario llamado `registro`** a partir de una `lista_completa` (lista de listas), con la finalidad de
entregarlo a la persona responsable del análisis de datos.

#### 📋 Estructura de la Información

* La `lista_completa` contiene, para cada estudiante:

  * Nombre (incluido dentro de una tupla)
  * Notas
  * Promedio final
  * Situación (aprobado/reprobado)

#### 🏗️ Paso a Paso

1. **Crear la lista de columnas** a incluir en el diccionario:

   ```python
   columnas = ["notas", "promedio_final", "situacion"]
   ```

2. **Construcción del diccionario `registro`**:

   * Se usa comprensión de diccionarios para asociar cada columna con su lista de valores desde `lista_completa`:

     ```python
     registro = {
         columnas[i]: [fila[i+1] for fila in lista_completa]
         for i in range(len(columnas))
     }
     ```

3. **Agregar la clave `estudiante`** con los nombres de los alumnos:

   * Se extraen los nombres desde el primer elemento (índice 0) de cada fila de `lista_completa`:

     ```python
     registro["estudiante"] = [fila[0][0] for fila in lista_completa]
     ```

---

### ✅ Resultado

El diccionario `registro` contiene los datos organizados por columnas:

```python
{
  "notas": [...],
  "promedio_final": [...],
  "situacion": [...],
  "estudiante": [...]
}
```

✔️ Listo para usarse en la creación de **tablas de análisis de datos**.

---

## Trabajando con excepciones

### Tratando excepciones

#### 📌 ¿Qué son las excepciones?

* **Excepciones**: Errores que ocurren durante la **ejecución del programa**.
* Interrumpen el flujo del código si **no son manejadas adecuadamente**.
* Su manejo adecuado **evita fallos inesperados** o bugs.

#### ⚠️ Tipos de errores en Python

1. **Errores de sintaxis**: Comunes en la fase de escritura, impiden ejecutar el código.
2. **Excepciones**: Se presentan durante la ejecución, incluso si la sintaxis es correcta.

> 💡 Python proporciona documentación amplia sobre los diferentes tipos de excepciones y su jerarquía.

#### 📚 Jerarquía de excepciones

* Existe una estructura jerárquica que **organiza los tipos de excepciones**.
* Consultarla facilita la **comprensión y manejo de errores específicos** como `KeyError`, `ValueError`, etc.

#### 🛠️ Cláusulas para el manejo de excepciones

##### `try` y `except`

* **`try`**: Se coloca el bloque de código que **puede causar una excepción**.
* **`except`**: Define qué hacer si ocurre una **excepción específica**.

```python
try:
    resultado = diccionario[clave]
except KeyError:
    print("Clave no encontrada")
```

##### Alias de excepción

* Se puede capturar el error con un alias para **examinar el tipo o mensaje del error**.

```python
except KeyError as e:
    print(type(e))
    print(e)
```

#### 🧪 Ejemplo práctico

* Se consulta un **diccionario de notas** por nombre de estudiante.
* Si el nombre no está en el diccionario, ocurre un `KeyError`.
* Se maneja la excepción mostrando: `"estudiante no matriculado en el grupo"`.

#### Código mejorado con `else`

* Permite ejecutar código **solo si no ocurre ninguna excepción**.

```python
try:
    resultado = notas[nombre]
except KeyError:
    print("Estudiante no matriculado en el grupo")
else:
    print(f"Las notas del estudiante son: {resultado}")
```

#### Uso de `finally`

* Se ejecuta **siempre**, ocurra o no una excepción.
* Ideal para **mensajes finales o tareas de limpieza**.

```python
finally:
    print("La consulta ha concluido")
```

#### ✅ Conclusiones excepciones

* Manejar excepciones permite **controlar el flujo del programa** y mejorar la experiencia del usuario.
* Las cláusulas `try`, `except`, `else` y `finally` son herramientas clave.
* Python facilita el manejo de errores gracias a su **claridad y documentación**.
* En próximas lecciones se explorarán otras formas de **elevar excepciones directamente**.

---

#### Para saber más: tipos de excepciones

En Python, básicamente existen dos formas distintas de errores: los de sintaxis y las excepciones. Las excepciones son
una manera de manejar errores y situaciones inesperadas en el código, asegurando un flujo de ejecución más controlado.

Como científico de datos, deberás prestar atención a situaciones como estas para evitar errores o problemas en tus códigos
y análisis que puedan afectar tanto la experiencia del usuario como la eficiencia de tu análisis.

##### Tipos de Excepciones

| Tipo de Excepción | Descripción                                                                                     | Ejemplo de Código                  | Mensaje de Error                                       | Causa                                                                 |
|-------------------|-------------------------------------------------------------------------------------------------|------------------------------------|---------------------------------------------------------|-----------------------------------------------------------------------|
| **SyntaxError**    | Error en la escritura del código, detectado por el analizador.                                  | `print(10 / 2`                     | `SyntaxError: unexpected EOF while parsing`             | Paréntesis sin cerrar.                                               |
| **NameError**      | Se usa un nombre que no ha sido definido o importado.                                           | `raiz = sqrt(100)`                | `NameError: name 'sqrt' is not defined`                 | No se importó `sqrt` desde la biblioteca correspondiente.            |
| **IndexError**     | Se intenta acceder a una posición inexistente en una estructura como lista, tupla o cadena.     | `lista = [1, 2, 3]; lista[4]`      | `IndexError: list index out of range`                   | Acceso fuera del rango de la lista.                                 |
| **TypeError**      | Se aplica un operador o función a un tipo de dato incorrecto.                                   | `"1" + 1`                          | `TypeError: can only concatenate str (not "int") to str`| No se puede concatenar una cadena con un entero.                    |
| **KeyError**       | Se intenta acceder a una clave inexistente en un diccionario.                                   | `estados["MI"]`                   | `KeyError: 'MI'`                                        | La clave "MI" no está en el diccionario.                            |
| **Warning**        | Advertencia por una operación que no detiene el código, pero puede afectar resultados futuros.  | `a = np.arange(5); a / a`         | `RuntimeWarning: invalid value encountered in true_divide`| División de 0 por 0 genera valores `nan`.                            |

#### 🧠 Concepto: Uso de la cláusula `raise` en el manejo de excepciones

En Python, además de capturar errores con `try` y `except`, podemos generar nuestras **propias excepciones** utilizando la cláusula `raise`. Esto permite controlar mejor los comportamientos inesperados en el código, emitiendo errores personalizados según la lógica del programa.

**Casos comunes para usar `raise`:**

* Validaciones personalizadas (por ejemplo, cantidad de elementos en una lista).
* Alertas cuando un dato no cumple con el tipo requerido (números, cadenas, etc.).
* Combinación con `try`-`except` para ofrecer mensajes claros al usuario final.

---

#### 💻 Ejercicio paso a paso: Validación de una lista de calificaciones con excepciones personalizadas

Crear una función que calcule el promedio de una persona estudiante a partir de una lista de calificaciones. La función debe:

1. Lanzar un `ValueError` si hay más de 4 calificaciones.
2. Detectar y manejar un `TypeError` si hay valores no numéricos.
3. Mostrar un mensaje final que indique que la consulta ha concluido, sin importar si hubo error o no.

---

#### 🪜 Paso 1: Definir la función con validaciones

```python
def calcular_promedio(calificaciones):
    if len(calificaciones) > 4:
        raise ValueError("La lista no puede tener más de cuatro calificaciones.")

    promedio = sum(calificaciones) / len(calificaciones)
    return promedio
```

---

#### 🪜 Paso 2: Crear una lista válida y calcular el promedio

```python
notas = [6, 7, 8, 9]  # 4 calificaciones válidas

try:
    resultado = calcular_promedio(notas)
    print("Promedio:", resultado)
except TypeError:
    print("No fue posible calcular el promedio de la persona estudiante, solo se admiten valores numéricos.")
except ValueError as e:
    print(e)
finally:
    print("Consulta finalizada.")
```

🔸 **Salida esperada:**

```python
Promedio: 7.5
Consulta finalizada.
```

---

#### 🪜 Paso 3: Agregar más de cuatro calificaciones

```python
notas = [6, 7, 8, 9, 10]  # 5 calificaciones

try:
    resultado = calcular_promedio(notas)
    print("Promedio:", resultado)
except TypeError:
    print("No fue posible calcular el promedio de la persona estudiante, solo se admiten valores numéricos.")
except ValueError as e:
    print(e)
finally:
    print("Consulta finalizada.")
```

🔸 **Salida esperada:**

```python
La lista no puede tener más de cuatro calificaciones.
Consulta finalizada.
```

---

#### 🪜 Paso 4: Incluir un valor no numérico

```python
notas = [6, 7, 8, "10"]  # El último valor es una cadena de texto

try:
    resultado = calcular_promedio(notas)
    print("Promedio:", resultado)
except TypeError:
    print("No fue posible calcular el promedio de la persona estudiante, solo se admiten valores numéricos.")
except ValueError as e:
    print(e)
finally:
    print("Consulta finalizada.")
```

🔸 **Salida esperada:**

```python
No fue posible calcular el promedio de la persona estudiante, solo se admiten valores numéricos.
Consulta finalizada.
```

---

#### 📌 Observación sobre la jerarquía de excepciones en Python

Python evalúa las excepciones siguiendo una jerarquía. Por ejemplo:

1. `TypeError` se evalúa antes que `ValueError`.
2. La jerarquía determina qué excepción será capturada primero, no el orden en que se escriben los `except`.

🔎 Por eso, aunque un `ValueError` también sea posible, si hay un `TypeError`, este será capturado primero.

#### ¿Dónde está el error?

### Generando nuestra propia excepción

### Proyecto final

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

## Trabajando con excepciones

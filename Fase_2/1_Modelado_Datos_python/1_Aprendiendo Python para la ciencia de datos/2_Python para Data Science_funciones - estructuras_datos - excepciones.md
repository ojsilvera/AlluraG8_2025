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
  * `from matplotlib import pyplot as plt`
  * Ambas sintaxis importan el submódulo `pyplot` de `matplotlib`, usado para visualizaciones.

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

## Funciones

## Estructuras de datos

## Estructuras anidadas

## Trabajando con excepciones

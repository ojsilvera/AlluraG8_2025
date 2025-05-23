# python data science primeros pasos

## Comenzando con python

### ¿Qué es Python?

- **Lenguaje de programación multiparadigma**:
  - Soporta programación **orientada a objetos** y **funcional**.
- **Interpretado** (no compilado): ejecuta el código línea a línea con ayuda de un intérprete.
- Creado por **Guido Van Rossum** en los años 90.
- Es **código abierto** y tiene una comunidad muy activa.
- Posee una **sintaxis sencilla y legible**, ideal para principiantes y uso en **Data Science**.
- El nombre "Python" se inspiró en la serie de televisión británica Monty Python's Flying Circus

---

### Lenguaje Interpretado vs Compilado

| Característica            | Interpretado (como Python)                                | Compilado                                      |
|---------------------------|-----------------------------------------------------------|------------------------------------------------|
| Ejecución                 | Línea a línea, en tiempo real                             | Compilado completamente antes de ejecutar      |
| Corrección de errores     | Inmediata, durante la ejecución                           | Requiere recompilar todo el código             |
| Ejemplo con receta        | Traducción simultánea línea por línea por un amigo japonés| Receta ya traducida completamente antes de usar|

---

### Python en Data Science

- Python es **altamente recomendado** para trabajar en ciencia de datos.
- Alternativas como **R o Java** también existen, pero Python es más versátil y amigable.
- Gracias a la comunidad, hoy se cuenta con herramientas como:
  - **IPython**: entorno interactivo para escribir y ejecutar código.
  - **Google Colab**: plataforma online para usar Python sin instalaciones locales.

---

### Google Colab y Notebooks

- Permite trabajar con archivos **`.ipynb`** (IPython Notebook):
  - `I`: Interactivo
  - `PY`: Python
  - `NB`: Notebook
- **Ventajas**:
  - No requiere instalación.
  - Se accede con cuenta de **Gmail**.
  - Compatible con **Google Drive** y **GitHub**.

---

### Funcionalidades de los Notebooks

- Celdas de **código** y **texto** (Markdown).
- Texto formateado con **Markdown Language**:
  - `#` para títulos, `##` para subtítulos, etc.
- Puedes:
  - Insertar, borrar, mover celdas.
  - Ejecutar celdas con **Shift + Enter**.
  - Usar atajos como:
    - `Esc + B` para insertar celdas debajo.
    - `Esc + A` para insertar celdas encima.
    - `Ctrl + M + K` para mover celdas arriba.

---

### Menú y Organización

- Menú lateral (índice tipo "sándwich"):
  - Visualiza la estructura del notebook.
  - Permite organizar el contenido por secciones.
  - Posibilita la **búsqueda**, **reemplazo**, conexión con **Google Drive**, entre otros.

---

### Conclusión

Python, por su simplicidad y flexibilidad, junto con herramientas como **Google Colab**, se presenta como el entorno perfecto
para comenzar en **Data Science** de forma interactiva, práctica y accesible.

---

### hola mundo

#### 💻 Entorno de trabajo: Google Colab

  -**Colab** es un entorno interactivo para programar en Python directamente desde el navegador.
  -Las **celdas** pueden ser de texto o código. En este entrenamiento se prioriza el uso de celdas de **código**.

#### ▶️ Ejecución de celdas

- **Shift + Enter**: Ejecuta la celda actual y crea una nueva celda debajo.
- **Ctrl + Enter**: Ejecuta la celda sin crear una nueva.
- También se puede ejecutar presionando el ícono de **play** a la izquierda de la celda.

#### 🖨️ El clásico "Hola, mundo"

- Primera instrucción típica en cualquier lenguaje de programación.
- En **Python** se puede hacer con una sola línea gracias a su **sintaxis sencilla** y **legibilidad**.

```python
print('Hola, mundo')
```

#### 🔍 Función `print()` y documentación

  -`print()` es una **función incorporada (built-in)** de Python.
  -Se usa para **mostrar salidas en pantalla**.
  -Al hacer clic sobre `print` en Colab, se accede directamente a la **documentación oficial de Python**.

#### 💡 Built-in Functions

  -Funciones ya disponibles en Python sin necesidad de importar módulos adicionales.
  -Ejemplo: `print()`, `len()`, `type()`, entre otras.

#### 📄 Sintaxis de texto en Python

  -Los **textos (strings)** se representan entre **comillas simples (' ')** o **dobles (" ")**.
  -Se pueden imprimir mensajes personalizados:

```python
print('Mi nombre es Álvaro y tengo 39 años')
```

#### 🧠 Características del lenguaje Python

- **Intuitivo** y **legible**.
- **Interpretado**, no necesita compilación previa.
- Ideal para ciencia de datos por su **facilidad de uso y documentación abundante**.

#### 🧪 Interacción en Colab

- Es posible:
  - Escribir múltiples comandos en una sola celda.
  - Ver resultados inmediatamente tras la ejecución.
  - Eliminar, mover o transformar celdas entre código y texto (Markdown).

#### Desafios 1

   Los desafios se encuentra en: [Desafios](https://github.com/ojsilvera/AlluraG8_2025_fase2_desafios/)

---

## Manipulando datos en Python

### Variables

#### 💻 Entorno de Ejecución en Google Colab

- Cada vez que haces clic en **"Conectar"**, se asigna un entorno virtual con:
  - +12 GB de **memoria RAM**
  - +100 GB de **almacenamiento en disco**
- Este entorno es **temporal**:
  - Se pierde al cerrar o dejar de usar el notebook por un tiempo.
  - También existe un **límite de uso** en cuentas gratuitas.

#### 🔁 Ejecución de Celdas

- Ejecutar celdas con `Ctrl + Enter` o `Shift + Enter`.
- Los **números entre corchetes** indican la secuencia de ejecución.
- Sirven como referencia para saber si el entorno sigue activo.

#### 🧠 Memoria y Variables

- Programar es **utilizar y gestionar memoria**.
- Una **variable** es un nombre asociado a un **valor en memoria**.
  - Ejemplo: `edad = 5`
- Python maneja las variables con **asignación dinámica**, sin necesidad de declarar el tipo.

#### 📌 La función `id()`

- Devuelve la **dirección de memoria** del objeto.
  - Ejemplo: `id(5)` y `id(edad)` devuelven el mismo valor si `edad = 5`.

#### 🔠 Tipos de Datos y Asignación

- Se puede asignar texto con comillas:
  - `nombre = 'Gabriel'` o `nombre = "Gabriel"`
- `id(nombre)` y `id('Gabriel')` apuntan al mismo espacio en memoria.

#### ⚠️ Reglas para Nombres de Variables

1. No comenzar con números (`❌ 10notas`)
2. No usar espacios (`❌ nombre escuela`)
3. No usar **palabras reservadas** de Python (`❌ for`, `if`, `class`, etc.)
4. Python distingue entre **mayúsculas y minúsculas** (`edad` ≠ `Edad` ≠ `EDAD`)

#### 🧠 Asignación Estática vs Dinámica

- Lenguajes como C o Java requieren **asignación estática** (tipo y tamaño).
- **Python** asigna dinámicamente:
  - Más **simple, rápido y flexible** para principiantes.

#### Los comentarios

'#' es el simbolo para iniciar un comentario de una sola linea

'''
Este es un comentario
de varias líneas o bloque de comentario.
'''

---

### Tipos de variables

#### 🎯 Contexto

- Somos asistentes de ciencia de datos en una institución educativa.
- El objetivo es manipular registros de datos utilizando Python.
- Comprender los **tipos de variables** es esencial para este trabajo.

---

#### 🧩 Tipos de Variables en Python

Python clasifica las variables según el tipo de objeto que almacenan. Los tipos principales son:

#### 1. **Enteros (`int`)**

- Representan números enteros.
- Ejemplo:
  ``python
  edad = 5
  type(edad)  # devuelve <class 'int'>
  ´´

#### 2. **Decimales (`float`)**

- Números con punto decimal (no se usa coma).
- Ejemplo:
  ``python
  promedio = 9.5
  type(promedio)  # devuelve <class 'float'>
  ``

#### 3. **Cadenas de texto (`str`)**

- Texto entre comillas simples o dobles.
- Ejemplo:
  ``python
  nombre = "Penelope Camacho"
  type(nombre)  # devuelve <class 'str'>
  ``

#### 4. **Booleanos (`bool`)**

- Valores lógicos: `True` o `False`.
- Ejemplo:
  ``python
  aprobado = True
  type(aprobado)  # devuelve <class 'bool'>
  ``

---

#### 🧠 Ejemplo aplicado

Supongamos que tenemos los siguientes datos de una estudiante:

- **Nombre**: Penelope Camacho
- **Edad**: 11
- **Promedio**: 9.75
- **Situación académica**: Aprobada (True)

Se pueden declarar en Python así:

``python
nombre_estudiante = "Penelope Camacho"
edad_estudiante = 11
promedio_estudiante = 9.75
situacion_academica = True
``

Podemos imprimirlas todas con `print()`:
``python
print(nombre_estudiante, edad_estudiante, promedio_estudiante, situacion_academica)
``

Y verificar su tipo:
``python
type(nombre_estudiante)       # str
type(edad_estudiante)         # int
type(promedio_estudiante)     # float
type(situacion_academica)     # bool
``

---

#### ✅ Conclusión

- Comprender los tipos de variables es crucial para manipular datos correctamente.
- Cada tipo de variable tiene su comportamiento y utilidad específica.

---

¿Quieres que convierta este resumen en una ficha de Notion o lo guarde como archivo Markdown?

### Variables numericas

#### 📘 Resumen: Trabajo con Variables Numéricas en Python (`int` y `float`)

En este entrenamiento se introduce el uso de **variables numéricas** en Python, específicamente de los tipos `int` y `float`,
aplicados al análisis de datos de empleados de una institución educativa.

#### 🧮 Escenario planteado

Se cuenta con una tabla que contiene tres roles:

- **Vigilantes**: 5 empleados, salario de 300 dólares
- **Docentes**: 16 empleados, salario de 500 dólares
- **Coordinadores**: 2 empleados, salario de 600 dólares

Estas variables son representadas así en Python:

``python
Cvigilante = 5
Svigilante = 300
Cdocente = 16
Sdocente = 500
Ccoordinador = 2
Scoordinador = 600
``

#### 🧩 Cálculos requeridos

#### 1. ✅ **Cantidad total de empleados**

Se suman todas las cantidades:

```python
TotalEmpleados = Cvigilante + Cdocente + Ccoordinador
# Resultado: 23 (tipo int)
```

#### 2. 📉 **Diferencia entre el salario más alto y el más bajo**

Se calcula restando el salario más bajo (vigilante) del más alto (coordinador):

```python
diferencia_salario = Scoordinador - Svigilante
# Resultado: 300
```

#### 3. 📊 **Promedio ponderado de los salarios**

Se usa la fórmula del promedio ponderado:

\[
\text{Promedio} = \frac{(C_v \cdot S_v) + (C_d \cdot S_d) + (C_c \cdot S_c)}{C_v + C_d + C_c}
\]

En código:

```python
promedio_salarios = (Cvigilante * Svigilante +
                     Cdocente * Sdocente +
                     Ccoordinador * Scoordinador) / TotalEmpleados
# Resultado: 465.0 (tipo float)
```

#### 🧠 Conceptos clave abordados

- **Tipos de datos numéricos**:
  - `int`: enteros (ej. cantidades de empleados)
  - `float`: números decimales (ej. promedio de salarios)
- **Operaciones aritméticas**:
  - Suma, resta, multiplicación y división
  - Precedencia de operaciones (producto antes de suma)
- **Buenas prácticas**:
  - Nombres explícitos para las variables
  - Uso de `type()` para identificar el tipo de variable
- **Estructura visual del código**:
  - Uso de saltos de línea para mejorar la legibilidad

---

### Variables de texto

Una *string* es un conjunto de caracteres alfanuméricos que conforman un texto. Se pueden crear asignando un texto entre
comillas simples o dobles a una variable.

```python
T = "Alura"
type(T)  # <class 'str'>
```

---

#### 🧰 Métodos de objetos *string*

Las *strings* son objetos en Python que tienen métodos propios que permiten su manipulación.
Para invocar un método o atributo se usa el operador punto (`.`).

#### Métodos comunes

- `.upper()` → Convierte el texto a **mayúsculas**.
- `.lower()` → Convierte el texto a **minúsculas**.
- `.strip()` → Elimina **espacios en blanco** al inicio y al final.
- `.replace("valor_antiguo", "valor_nuevo")` → **Sustituye** cadenas dentro del texto.

---

#### 🧪 Ejemplo práctico: Limpieza y transformación de una cadena

Caso: Se debe corregir el nombre de una profesora en los registros.
Errores detectados:

- Espacios en blanco al inicio y final.
- Apellido incorrecto ("Sánchez" → "Santos").
- Se desea dejar el texto en mayúsculas.

```python
texto = "  Micaela de los SánChez  "
nuevo_texto = texto.strip().replace("SánChez", "Santos").upper()
print(nuevo_texto)  # "MICAELA DE LOS SANTOS"
```

---

#### 🧠 Conceptos clave sobre memoria en Python

- Las *strings* son **inmutables**. Las transformaciones no modifican la variable original a menos que se reasigne.
- Para conservar cambios, se debe **asignar el resultado a una nueva variable** o sobrescribir la anterior.

```python
print(id(texto))        # ID original
print(id(nuevo_texto))  # Nuevo ID → nueva ubicación en memoria

# Sobrescribir la misma variable
texto = texto.strip().replace("SánChez", "Santos").upper()
print(id(texto))        # Nuevo ID, distinto al original
```

- Python utiliza un **recolector de basura** que libera la memoria cuando una variable ya no está referenciada.

---

#### 📥 Captura de datos del usuario

Hasta ahora, las cadenas han sido ingresadas manualmente en el código.
En futuras lecciones, se verá cómo capturar texto directamente desde el input del usuario.

---

#### 🧩 Conclusión

Conocer el funcionamiento de las cadenas de texto, sus métodos y cómo Python gestiona la memoria es esencial para realizar
transformaciones correctas sin afectar otras variables. Es una práctica importante, especialmente al trabajar con grandes
volúmenes de datos.

---

### Operadores en python

Los **operadores** son símbolos o palabras clave que se utilizan para realizar operaciones sobre **valores** o
**variables**. Python tiene varios tipos de operadores, que se agrupan según su función:

---

#### 1. 🔢 Operadores Aritméticos

Se usan para realizar operaciones matemáticas básicas:

| Operador | Descripción         | Ejemplo (`a = 10, b = 3`) | Resultado |
|----------|---------------------|----------------------------|-----------|
| `+`      | Suma                | `a + b`                    | `13`      |
| `-`      | Resta               | `a - b`                    | `7`       |
| `*`      | Multiplicación      | `a * b`                    | `30`      |
| `/`      | División            | `a / b`                    | `3.33`    |
| `//`     | División entera     | `a // b`                   | `3`       |
| `%`      | Módulo (resto)      | `a % b`                    | `1`       |
| `**`     | Potencia            | `a ** b`                   | `1000`    |

---

#### 2. 🧮 Operadores de Asignación

Sirven para **asignar valores** a variables y también para combinar operaciones con asignación.

| Operador | Equivalente a | Ejemplo     | Resultado (`a = 10`) |
|----------|---------------|-------------|----------------------|
| `=`      | -             | `a = 10`    | `a = 10`             |
| `+=`     | `a = a + 5`   | `a += 5`    | `a = 15`             |
| `-=`     | `a = a - 3`   | `a -= 3`    | `a = 7`              |
| `*=`     | `a = a * 2`   | `a *= 2`    | `a = 20`             |
| `/=`     | `a = a / 2`   | `a /= 2`    | `a = 5.0`            |
| `//=`    | `a = a // 2`  | `a //= 2`   | `a = 5`              |
| `%=`     | `a = a % 2`   | `a %= 2`    | `a = 0` o `1`        |
| `**=`    | `a = a ** 2`  | `a **= 2`   | `a = 100`            |

[Exponentes](https://www.datacamp.com/es/tutorial/exponents-in-python)

---

#### 3. 📏 Operadores de Comparación

Comparan dos valores y devuelven **True** o **False**.

| Operador | Descripción         | Ejemplo       | Resultado |
|----------|---------------------|---------------|-----------|
| `==`     | Igual a             | `a == b`      | `False`   |
| `!=`     | Distinto de         | `a != b`      | `True`    |
| `>`      | Mayor que           | `a > b`       | `True`    |
| `<`      | Menor que           | `a < b`       | `False`   |
| `>=`     | Mayor o igual que   | `a >= b`      | `True`    |
| `<=`     | Menor o igual que   | `a <= b`      | `False`   |

---

#### 4. 🔁 Operadores Lógicos

Se utilizan para combinar expresiones booleanas.

| Operador | Descripción       | Ejemplo                  | Resultado |
|----------|-------------------|--------------------------|-----------|
| `and`    | Verdadero si ambas son verdaderas | `True and False`     | `False`   |
| `or`     | Verdadero si una es verdadera     | `True or False`      | `True`    |
| `not`    | Invierte el valor lógico          | `not True`           | `False`   |

---

#### 5. 📦 Operadores de Membresía

Verifican si un valor está dentro de una **secuencia** (como listas, strings, tuplas).

| Operador | Descripción          | Ejemplo            | Resultado |
|----------|----------------------|--------------------|-----------|
| `in`     | Está en              | `'a' in 'casa'`    | `True`    |
| `not in` | No está en           | `'z' not in 'casa'`| `True`    |

---

#### 6. 🧠 Operadores de Identidad

Comparan si dos variables apuntan al **mismo objeto** en memoria.

| Operador | Descripción         | Ejemplo         | Resultado |
|----------|---------------------|-----------------|-----------|
| `is`     | Es el mismo objeto  | `a is b`        | `False`   |
| `is not` | No es el mismo objeto | `a is not b`  | `True`    |

---

#### 📝 Ejemplo Práctico

```python
nombre = "Oscar"
if "O" in nombre and nombre != "":
    print("Nombre válido")
else:
    print("Nombre no válido")
```

### Colectando datos

Aprender a capturar datos introducidos por el usuario mediante la función `input()` en Python, y cómo transformarlos a
tipos de datos adecuados para su posterior manipulación.

---

#### 🧩 `input()`: Captura de datos

- Permite ingresar información desde el teclado.
- Sintaxis básica: `input("Escribe algo: ")`
- **Siempre retorna un valor de tipo `str`**, sin importar si se ingresan números o letras.

#### 🧪 Buenas prácticas

- Siempre **almacenar el valor capturado en una variable**, por ejemplo:

  ```python
  nombre = input("Escribe tu nombre: ")
  ```

#### 🧮 Conversión de tipos

Para realizar operaciones numéricas, es necesario **convertir los datos capturados**:

| Tipo deseado | Función de conversión | Ejemplo |
|--------------|-----------------------|---------|
| Entero       | `int()`               | `int(input("Año de admisión: "))` |
| Decimal      | `float()`             | `float(input("Nota de admisión: "))` |

#### ⚠️ Concatenación no deseada

Si no conviertes los valores, sumar dos entradas numéricas con `+` resultará en concatenación de cadenas, no en una
operación aritmética.

```python
a = input("Año de admisión: ")   # "2023"
b = input("Año de salida: ")     # "2024"
print(a + b)                     # "20232024" (concatenación)
```

---

#### 🎨 Formateo de Salida

##### ✅ Uso de f-strings

Una forma moderna y clara de mostrar resultados:

```python
print(f"\n\tEl año de admisión fue: {añoAdmisión}\n\tLa nota de admisión fue: {notaAdmisión}")
```

- `\n`: Nueva línea (line break)
- `\t`: Tabulación (tab)

---

### formatos para string en pyton

En Python, dar formato a cadenas (strings) significa **insertar variables o valores dentro de un texto**, para que la salida sea más clara, legible y profesional.

---

#### 🔧 Métodos para dar formato a cadenas

##### 1. 📎 Concatenación clásica

Usa el símbolo `+` para unir textos.
👉 Requiere convertir números a texto manualmente con `str()`.

```python
nombre = "Oscar"
edad = 30
print("Hola, " + nombre + ". Tienes " + str(edad) + " años.")
```

---

##### 2. 🧮 Método `.format()`

Usa llaves `{}` como marcadores dentro de la cadena.

```python
nombre = "Oscar"
edad = 30
print("Hola, {}. Tienes {} años.".format(nombre, edad))
```

También se puede usar con índices:

```python
print("Hola, {0}. Tienes {1} años. Chau, {0}.".format(nombre, edad))
```

---

##### 3. ⚡ F-strings (formato recomendado desde Python 3.6)

Son más legibles y potentes. Colocas la letra `f` antes de la cadena y las variables dentro de llaves `{}`.

```python
nombre = "Oscar"
edad = 30
print(f"Hola, {nombre}. Tienes {edad} años.")
```

Puedes incluir expresiones directamente:

```python
print(f"En 5 años, tendrás {edad + 5} años.")
```

---

#### ✨ Caracteres especiales de formato

| Símbolo | Significado        |
|---------|--------------------|
| `\n`    | Nueva línea         |
| `\t`    | Tabulación (espacio) |
| `\\`    | Barra invertida `\` |
| `\"`    | Comillas dobles dentro de string |

Ejemplo:

```python
print(f"\n\tNombre:\t{nombre}\n\tEdad:\t{edad}")
```

---

#### 🎯 Formateo de números

##### Redondeo de decimales

```python
nota = 9.45678
print(f"Tu nota es: {nota:.2f}")  # Resultado: 9.46
```

##### Ancho de campo (alineación)

```python
print(f"{'Producto':<10}{'Precio':>10}")   # Alinea izquierda y derecha
print(f"{'Manzana':<10}{3.5:>10.2f}")
```

---

## 🛠️ Aplicación práctica combinada

```python
nombre = input("¿Cuál es tu nombre? ")
nota = float(input("¿Cuál fue tu nota? "))

print(f"\nHola, {nombre}.\n\tTu nota fue: {nota:.1f}")
```

---

### Desafios 2

   Los desafios se encuentra en: [Desafios](https://github.com/ojsilvera/AlluraG8_2025_fase2_desafios/)

---

## Estructuras condicionales

Ayudar al equipo de datos a **estructurar una condición** en Python que determine si un estudiante **aprueba o reprueba**
una asignatura según su nota.

---

### 📝 Comentarios en Python

- Para escribir **comentarios de una sola línea**, se utiliza el símbolo `#`.

  ```python
  # Este es un comentario de una sola línea
  ```

- Para escribir **comentarios multilínea**, se utilizan **tres comillas dobles** (`"""`) o simples (`'''`) al inicio y al final.

  ```python
  """
  Este es un comentario
  que abarca varias líneas
  """
  ```

---

### 🧮 Lógica de Aprobación

- **Condición de aprobación:** nota **mayor o igual a 7**.
- **Condición de reprobación:** nota **menor a 7**.

---

### 🧠 Concepto clave: Estructura condicional `if` en Python

Aunque no se muestra el código completo en esta lección, se introduce la **estructura condicional** como base para evaluar
si un estudiante aprueba:

```python
if nota >= 7:
    print("Estudiante aprueba")
else:
    print("Estudiante reprueba")
```

> Cada lenguaje tiene su propia sintaxis para condicionales, y Python no es la excepción.

---

### 📌 Conclusión

En esta lección se introdujeron tres conceptos fundamentales en Python:

- Uso de **comentarios** en código.
- Definición de una **condición lógica** para evaluar datos.
- Introducción a la **estructura `if`**, que será abordada a profundidad en la próxima clase.

---

### 📘 Condicionales en Python: `if` y `else`

#### 🎯 Objetivo

Aprender a usar las **estructuras condicionales** `if` y `else` en Python, fundamentales para el **control de flujo** de
un programa, permitiendo que ciertas instrucciones se ejecuten sólo si se cumplen condiciones específicas.

---

#### 🧠 ¿Qué es una estructura condicional?

> Es una herramienta de control de flujo que **ejecuta diferentes bloques de código dependiendo de si una condición es verdadera o falsa**.

- Si la condición es **verdadera**, se ejecuta el primer bloque.
- Si la condición es **falsa**, se puede ejecutar un bloque alternativo usando `else`.

---

#### 🛠️ Sintaxis en Python

```python
if condición:
  # bloque si la condición es verdadera
else:
  # bloque si la condición es falsa
```

- **`if`**: palabra clave que evalúa si una condición se cumple.
- **`else`**: ejecuta el bloque de código si la condición del `if` es falsa.
- Los bloques de código **se indentan**, normalmente con 2 o 4 espacios (Python no usa `{}` ni `;`).

---

#### 💬 Comentarios en código

- Para **una línea**: usar `#`

  ```python
  # Esto es un comentario
  ```

- Para **varias líneas**: usar `"""` o `'''`

  ```python
  """
  Comentario
  en varias líneas
  """
  ```

---

#### 🧪 Ejemplo práctico

```python
if 2 < 7:
  print("La condición es verdadera")
else:
  print("La condición es falsa")

print("Fin de la consulta")
```

### Resultado

- Imprime `"La condición es verdadera"` si la condición se cumple.
- Imprime `"La condición es falsa"` si no se cumple.
- Siempre imprime `"Fin de la consulta"` porque está fuera del bloque condicional.

---

#### 🔍 Detalles importantes

- Python **indentará automáticamente** después de `if` o `else`.
- La indentación (consistencia en espacios) es crucial para definir correctamente los bloques.
- El `if` devuelve internamente **True** o **False** al evaluar la condición.
- La estructura `else` representa el camino **alternativo o por defecto**.

---

#### 📌 Conclusión estrucuras condicionales if, else

- Las estructuras `if` y `else` son esenciales para manejar decisiones en un programa.
- Permiten definir qué debe ocurrir en función de **condiciones lógicas**.
- La **sintaxis clara** y el uso de **indentación** hacen que Python sea intuitivo para implementar condicionales.

---

### Uso del if & else

---

#### 🎯 Objetivo del algoritmo

Crear un programa que:

- Reciba una calificación como entrada.
- Determine si la persona estudiante **aprueba**, **va a recuperación** o **reprueba**.
- Muestre un mensaje según el resultado.

---

#### 🛠️ Lógica básica implementada

```python
calificacion = float(input("Digita la calificación: "))

if calificacion >= 7:
    print("La persona estudiante aprobó")
else:
    print("La persona estudiante reprobó")
```

---

#### ⚙️ Extensión con más condiciones

> La institución permite **recuperación** si la calificación está entre 5 y 6.99.

Nueva lógica:

```python
if calificacion >= 7:
    print("Aprobó")
elif calificacion >= 5:
    print("Va a recuperación")
else:
    print("Reprobó")
```

📌 Se usan varios `if` seguidos, o mejor aún, `elif` para evaluar condiciones intermedias y evitar errores lógicos.

---

#### 🚧 Problemas comunes con múltiples `if` + `else`

- Si no se estructuran bien los `if` y `else`, **pueden producirse errores lógicos**.
- Ejemplo de error: colocar un `else` que se asocia con el `if` más reciente, ignorando condiciones anteriores que ya se cumplieron.

```python
if calificacion >= 7:
    print("Aprobó")

if calificacion >= 5:
    print("Recuperación")
else:
    print("Reprobó")  # ❌ Este else se asocia solo con el segundo if
```

✅ Solución: usar estructuras de control como `if`, `elif` y `else` correctamente anidadas para mantener un **flujo lógico claro y consistente**.

---

#### 🧩 Conceptos claves relacionados

| Concepto          | Significado clave                                                                 |
|-------------------|------------------------------------------------------------------------------------|
| `if`              | Evalúa una condición; si es verdadera, ejecuta el bloque de código.                |
| `elif`            | Evalúa otra condición si el `if` anterior fue falso.                               |
| `else`            | Se ejecuta solo si todas las condiciones anteriores son falsas.                    |
| Indentación       | Importante para definir qué pertenece a cada bloque (`if`, `else`, etc.).          |
| Flujo de control  | Determina el camino que toma el programa según las condiciones evaluadas.          |
| Lógica condicional | Es vital ser preciso con los rangos y el orden para evitar contradicciones.       |

---

#### ✅ Buenas prácticas

- Usar `elif` en lugar de múltiples `if` independientes si las condiciones son mutuamente excluyentes.
- Asegurarse de que cada bloque condicional cubra rangos **claros y no superpuestos**.
- Probar varios valores (límites y fuera de rango) para validar la lógica.

---

#### `elif` en control de flujo en Python

##### 🔍 Problema detectado

Un **problema lógico** al usar un `else` luego de varios `if` independientes. El `else` se ejecutaba si **el último `if` era falso**,
sin considerar si condiciones anteriores ya se habían cumplido. Esto provocaba
una **ejecución inesperada del flujo**.

---

##### ✅ Solución: uso de `elif`

Se introduce la cláusula **`elif`** como solución.

##### ¿Qué es `elif`?

- Es una **contracción** de `else if`.
- Permite evaluar **múltiples condiciones** de forma ordenada y clara.
- Evita errores en el flujo lógico del programa.

##### 🔠 Sintaxis básica

```python
if condición1:
    # acción si condición1 es verdadera
elif condición2:
    # acción si condición2 es verdadera
elif condición3:
    # acción si condición3 es verdadera
else:
    # acción si ninguna condición fue verdadera
```

---

##### 🔄 Funcionamiento del `elif`

- Se **evalúan las condiciones en orden**.
- Python detiene la evaluación **cuando una condición es verdadera**.
- Si ninguna lo es, se ejecuta el bloque `else`.

---

##### 💡 Beneficios de usar `elif`

- **Evita errores lógicos** por condiciones mal encadenadas.
- **Reduce la repetición** de código.
- Mejora la **claridad y mantenimiento** del código.
- Se pueden usar **varios `elif` seguidos**, no está limitado a uno solo.

---

#### Condicionales Compuestas y Operadores Lógicos en Python

##### 🔍 Condiciones Simples vs Condiciones Compuestas

Hasta ahora se han trabajado **condiciones simples** (una sola evaluación lógica), pero en programación real es común tener
que evaluar **múltiples condiciones al mismo tiempo** para tomar decisiones más complejas.

---

##### ⚙️ Operadores Lógicos

###### 1. `and` (Y)

- Evalúa como **True** solo si *ambas condiciones* son verdaderas.
- Tabla de verdad:

  ```python
  True and True   => True
  True and False  => False
  False and True  => False
  False and False => False
  ```

###### 2. `or` (O)

- Evalúa como **True** si *al menos una condición* es verdadera.
- Tabla de verdad:

  ```python
  True or True    => True
  True or False   => True
  False or True   => True
  False or False  => False
  ```

###### 3. `not` (Negación)

- Invierte el valor lógico de la condición.

  ```python
  not True  => False
  not False => True
  ```

---

###### 4. 🔎 Operador `in`

- Se utiliza para verificar si un **elemento está presente dentro de una colección** (cadena, lista, tupla, etc.).
- Ejemplo:

  ```python
  if "Miguel Castro" in lista_estudiantes:
      print("El estudiante aprobó")
  else:
      print("El estudiante reprobó")
  ```

- Útil especialmente en validaciones y estructuras repetitivas.

---

###### 🧰 Aplicación Práctica

1. Se crean variables booleanas (`True`, `False`) para probar combinaciones con `and`, `or`, `not`.
2. Se verifica la pertenencia de nombres en una lista de estudiantes usando el operador `in`.
3. Se introducen conceptos básicos de **control de flujo** y **evaluación lógica** aplicados a la solución de problemas.

---

### Estructuras de repeticion o ciclos

Obtener e imprimir el promedio de **dos calificaciones** para **tres estudiantes**, utilizando **variables de tipo `float`**.

---

#### 🔢 Cálculo del Promedio

- Se crean dos variables por estudiante: `calificación1` y `calificación2`.
- Se solicita al usuario que ingrese ambas calificaciones usando `input()`.
- Las calificaciones se convierten a `float` para permitir decimales.
- El **promedio** se calcula mediante la fórmula:

  ```python
  promedio = (calificación1 + calificación2) / 2
  ```

- Se imprime el resultado con la función `print()` y el método `format()`:

  ```python
  print("El promedio del estudiante es {:.2f}".format(promedio))
  ```

---

#### 🔁 Problema Identificado

Aunque el cálculo funciona, **repetir el mismo bloque de código tres veces no es práctico**. Esto plantea un problema de escalabilidad:

> ¿Qué pasaría si hubiera que calcular el promedio para **100 estudiantes**?

---

#### 🧩 Solución Propuesta

El texto introduce el concepto de **estructuras de repetición (bucles)** como solución eficiente para este tipo de tareas repetitivas:

##### Tipos de bucles en Python

- `while`: Repite un bloque **mientras** se cumpla una condición.
- `for`: Recorre una **secuencia de elementos** (como un rango de números, listas, etc.).

> Estas estructuras permiten ejecutar bloques de código múltiples veces **sin duplicar código manualmente**.

---

#### 🔚 Conclusión

El ejercicio resalta la importancia de:

- Entender cómo trabajar con entradas de usuario.
- Calcular promedios correctamente.
- Identificar patrones repetitivos en código.
- Introducir estructuras de control como los **bucles**, que serán estudiados a profundidad en la siguiente lección.

---

### Ciclo while

En la lección anterior, se repitió manualmente un bloque de código para calcular promedios de tres estudiantes. Sin embargo,
esta solución **no es escalable**.

#### 🎯 Problema a Resolver

> ¿Qué sucede si debemos repetir ese bloque más de tres veces?
Repetir código manualmente se vuelve ineficiente. Por ello, **se introduce el bucle `while` como solución automatizada**.

---

#### 🔹 ¿Qué es?

Es una estructura de control que permite ejecutar un bloque de código **mientras una condición sea verdadera**.

#### 🔹 Sintaxis básica

```python
while condición:
    # bloque de código que se repite
```

---

#### 🔢 Ejemplo Práctico: Contador del 1 al 10

1. **Inicialización del contador**:

   ```python
   contador = 1
   ```

2. **Condición del bucle**:

   ```python
   while contador <= 10:
       print(contador)
       contador += 1
   ```

3. **Pythonic Way**:
   Se recomienda usar `contador += 1` como forma más clara y concisa, en lugar de `contador = contador + 1`.

---

#### ✅ Ventajas del `while`

- Automatiza tareas repetitivas sin necesidad de copiar código.
- Facilita la escalabilidad (ej. más estudiantes, más datos).
- Promueve el uso de **buenas prácticas** y escritura más limpia en Python.

---

#### 🔄 Aplicación al Problema de los Promedios

El siguiente paso es **integrar la recolección de calificaciones y cálculo de promedios dentro del bucle `while`**, para automatizar el proceso con cualquier cantidad de estudiantes. Esto reemplaza la repetición manual del código.

---

#### 📌 Sintesis ciclo while

El bucle `while` permite:

- Evitar la repetición innecesaria de código.
- Automatizar procesos iterativos como cálculos por estudiante.
- Aplicar lógica condicional para controlar la duración del ciclo.

> Aprender estructuras como `while` es fundamental para escribir programas eficientes y escalables en Python.

---

### Ciclo for

---

#### 🔁 ¿Qué es el bucle `for`?

El bucle `for` en Python es una estructura de **control de flujo** que permite **iterar sobre un conjunto de elementos**,
ejecutando un bloque de código para cada elemento del conjunto. A diferencia del bucle `while`, que depende de una
**condición booleana**, `for` **requiere un iterable** (como una lista, tupla o secuencia generada por `range()`).

---

#### 🔧 Sintaxis básica del bucle `for`

```python
for elemento in conjunto:
    # bloque de código a ejecutar
```

- **`elemento`**: variable que representa el valor actual de la iteración.
- **`conjunto`**: colección de datos o secuencia iterable.
- El código dentro del bloque se ejecuta **una vez por cada elemento** del conjunto.

---

#### 📏 Uso de `range()` con `for`

La función incorporada `range()` se usa comúnmente con `for` para generar secuencias numéricas.

```python
range(inicio, fin, paso)
```

- `inicio`: número desde donde comienza la secuencia (inclusivo).
- `fin`: número donde termina la secuencia (exclusivo).
- `paso`: incremento entre valores (opcional, por defecto es 1).

#### 🧪 Ejemplo

```python
for n in range(1, 11):
    print(n)
```

- Imprime los números del 1 al 10.
- `range(1, 11)` incluye el 1 y **excluye el 11**.
- No es necesario incrementar manualmente un contador, como en `while`, porque `for` lo hace internamente.

---

#### 🧠 Conceptos clave relacionados

- **Iteración automática**: No es necesario definir o incrementar una variable de control manualmente.
- **Elegancia de Python**: Sintaxis clara y concisa, ideal para recorrer elementos sin escribir mucho código.
- **Secuencia inmutable**: `range` genera un objeto inmutable que puede recorrerse con `for`.

---

#### ✅ Ventajas del `for` sobre `while`

| Aspecto                  | `for`                           | `while`                         |
|--------------------------|----------------------------------|----------------------------------|
| Control de iteración     | Implícito con `range()`          | Manual (contador y condición)   |
| Ideal para               | Recorrer secuencias definidas    | Repetir hasta que se cumpla una condición |
| Código más legible       | ✅                               | ❌ (puede requerir más líneas)   |

---

> 🔍 **Conclusión**: El bucle `for` es una forma clara, sencilla y poderosa de iterar en Python, especialmente cuando se
> conoce de antemano el número de repeticiones o se tiene una secuencia de elementos definida.

### Operadores de asignacion o atribucion

En Python, **los operadores de asignación (o de atribución)** se utilizan para **asignar valores a variables** y, en muchos
casos, también para realizar operaciones matemáticas o lógicas **modificando el valor de la variable en el mismo paso**.

---

#### 🟩 Operador de asignación básica

| Operador | Descripción                          | Ejemplo           |
|----------|--------------------------------------|-------------------|
| `=`      | Asignación simple                    | `x = 5`           |

Esto significa que el valor `5` se asigna a la variable `x`.

---

#### 🔁 Operadores de asignación compuesta

Estos operadores **combinan una operación con una asignación**, permitiendo escribir código más compacto:

| Operador | Equivalente                | Uso típico               |
|----------|----------------------------|--------------------------|
| `+=`     | `x = x + valor`            | `x += 2`  ➝ suma y asigna |
| `-=`     | `x = x - valor`            | `x -= 3`  ➝ resta         |
| `*=`     | `x = x * valor`            | `x *= 4`  ➝ multiplica    |
| `/=`     | `x = x / valor`            | `x /= 2`  ➝ divide        |
| `//=`    | `x = x // valor`           | `x //= 2` ➝ división entera |
| `%=`     | `x = x % valor`            | `x %= 3`  ➝ módulo        |
| `**=`    | `x = x ** valor`           | `x **= 2` ➝ potencia      |

---

#### 🔁 Operadores de asignación lógica y binaria (más avanzados)

Estos son menos comunes pero útiles en operaciones a nivel de bits:

| Operador | Equivalente                | Descripción                   |
|----------|----------------------------|-------------------------------|
| `&=`     | `x = x & valor`            | AND binario                   |
| `|=`     | `x = x | valor`            | OR binario                    |
| `^=`     | `x = x ^ valor`            | XOR binario                   |
| `>>=`    | `x = x >> valor`           | Desplazamiento a la derecha   |
| `<<=`    | `x = x << valor`           | Desplazamiento a la izquierda |

---

#### 🧪 Ejemplo práctico operadores

```python
x = 10
x += 5    # ahora x vale 15
x *= 2    # ahora x vale 20
x -= 10   # ahora x vale 0
```

Cada línea **modifica el valor anterior de `x` en el mismo paso que realiza la operación**.

---

#### 🧠 Conclusión

Los operadores de asignación:

- Hacen tu código más limpio y legible.
- Son fundamentales para tareas repetitivas o acumulativas (como contadores, sumas, productos).
- Se combinan comúnmente con estructuras como bucles (`for`, `while`).

> Dominar estos operadores es clave para escribir código eficiente en Python.

### Comandos de control, rompiendo el ciclo for

Cuando trabajamos con bucles, podemos controlar el flujo de ejecución dentro del bloque de código, lo que nos permite
manipular la ejecución de los bucles. continue y break son los comandos de control que podemos usar con los bucles for y
while.

**continue** interrumpe la iteración actual del bucle y salta a la siguiente, es decir, regresa al inicio del código. Como
ejemplo, aquí hay un código que cuenta del 1 al 5 con un bucle for:

´´python
for i in range(1, 6):
    if i == 4:
        continue
    print(i)
´´

Este código imprime todos los números del 1 al 5, excepto el 4. Cuando el valor de i es 4, continue salta a la siguiente
iteración, omitiendo la instrucción print después de la condición en la iteración actual.

**break** detiene por completo la ejecución del bucle, saliendo del bloque de código. Utilicemos el mismo ejemplo de conteo,
pero esta vez con break:

´´python
for i in range(1, 6):
    if i == 4:
        break
    print(i)
´´

En este caso, el código imprime todos los números del 1 al 3. Cuando el valor de i es 4, break interrumpe por completo la
ejecución del bucle y sale de él, ignorando cualquier otra iteración que esté dentro de la estructura.

## Estructuras de datos

### Listas

---

#### 🔹 ¿Qué es una lista en Python?

- Es una **colección ordenada** y **mutable** de ítems.
- Se define usando **corchetes `[ ]`**.
- Los elementos están separados por **comas**.
- Puede contener múltiples tipos de datos: `números`, `cadenas`, `objetos`, `listas`, `tuplas`, `diccionarios`, etc.

#### 🔹 Características importantes

- Los **ítems se pueden modificar** luego de la creación de la lista.
- Es una de las estructuras más utilizadas en Ciencia de Datos.
- Cada elemento tiene una **posición (índice)**:

  - El primer elemento tiene índice `0`.
  - También se pueden usar **índices negativos** (`-1`, `-2`, etc.) para contar desde el final.

#### 🔹 Acceso a elementos

- Se accede a un ítem con la sintaxis: `lista[indice]`.
- El tipo de cada elemento se puede consultar con `type(lista[indice])`.

#### 🔹 Iteración con bucle `for`

- Se puede recorrer la lista con:

  ```python
  for elemento in lista:
      print(elemento)
  ```

#### 🔹 Modificación de elementos

- Para cambiar un valor específico:

  ```python
  lista[2] = 10  # Cambia el valor en el índice 2 a 10
  ```

#### 🔹 Cálculo con elementos de la lista

- Es posible operar con elementos específicos:

  ```python
  promedio = (lista[1] + lista[2] + lista[3]) / 3
  ```

---

#### 🧪 Ejemplo práctico listas

Lista original:

```python
lista = ["Penélope Camacho", 9.5, 9.0, 9.7, True]
```

### Acciones realizadas

1.**Cambio de la nota en índice 2** de `9.0` a `10.0`

  ```python
    lista[2] = 10.0
  ```

2.**Cálculo del promedio** de notas

   ```python
   promedio = (lista[1] + lista[2] + lista[3]) / 3
   ```

---

Sin embargo, es posible convertir una cadena en una lista mediante el método split(). Este método divide la cadena en una
lista de cadenas, utilizando un delimitador especificado entre paréntesis. Este delimitador debe ser una cadena. Como ejemplo,
convirtamos la cadena en una lista dividiéndola cada vez que aparezca el signo de interrogación "?":

```python
  pregunta = '¿Quién vino primero? ¿El huevo? ¿O fue la serpiente?'
  lista_palabras = pregunta.split('?')
  print(lista_palabras)
```

Salida: ['¿Quién vino primero', ' ¿El huevo', ' ¿O fue la serpiente', '']

El delimitador no aparece en la separación. Si no se define un delimitador, la cadena se separará por todos los espacios
en blanco en el texto.

```python
  pregunta = '¿Quién vino primero? ¿El huevo? ¿O fue la serpiente?'
  lista_palabras = pregunta.split()
  print(lista_palabras)
```

Salida: ['¿Quién', 'vino', 'primero?', '¿El', 'huevo?', '¿O', 'fue', 'la', 'serpiente?']

Es posible convertir una lista en una cadena mediante el método join(). Para usar esta función, debemos definir el
carácter que se utilizará para unir los elementos de la lista y formar la cadena. Luego, usamos el método { join() pasando
la lista como argumento. Veamos un ejemplo con una lista que contiene el resultado de algunas mezclas de colores primarios
en pintura:

```python
  mezclas = ['Pinturas: rojo, azul y amarillo',
              'Verde: mezcla de azul y amarillo',
              'Naranja: mezcla de rojo y amarillo',
              'Morado: mezcla de rojo y azul']
  unificador = '. '
  cadena_mezclas = unificador.join(mezclas)
print(cadena_mezclas)
```

Salida: 'Pinturas: rojo, azul y amarillo. Verde: mezcla de azul y amarillo. Naranja: mezcla de rojo y amarillo. Morado: mezcla de rojo y azul'

### 📘 Manipulación de Listas en Python

---

#### 🧮 Métodos Básicos de Listas

##### `len()`

- Permite conocer la **cantidad de elementos** en una lista.
- Ejemplo: `len(lista)` devuelve el número total de ítems.

---

##### ✂️ Slice Notation (Notación de corte)

Permite obtener **subconjuntos** de una lista utilizando la sintaxis `lista[inicio:fin]`, donde:

- El **índice de inicio** es inclusivo.
- El **índice final** es exclusivo.

Ejemplos

- `lista[0:2]` → Toma los elementos en posición 0 y 1.
- `lista[:3]` → Desde el inicio hasta el índice 2.
- `lista[3:]` → Desde el índice 3 hasta el final.
- `lista[:]` → Devuelve la lista completa.

---

#### 🧱 Métodos para Modificar Listas

##### `append()`

- Añade **un único elemento** al **final** de la lista.
- Si se añade una lista, se inserta **como un solo elemento anidado**.
- Ejemplo:

  ```python
  lista.append(10)
  lista.append([8, 9, 10])  # Lista dentro de lista
  ```

##### `extend()`

- Añade **varios elementos** al final de la lista.
- Cada ítem de la colección externa es añadido **como un nuevo elemento**.
- Ejemplo:

  ```python
  lista.extend([10, 8, 9])
  ```

---

##### 🗑️ Eliminar Elementos

`remove()`

- Elimina un **elemento específico** (por valor) de la lista.
- Ejemplo:

  ```python
  lista.remove([10, 8, 9])  # Elimina la lista anidada si existe
  ```

---

#### 💡 Recomendaciones

- Consultar la documentación oficial o usar la **autocompletación en Google Colab** (`lista.`) para explorar todos los
- métodos disponibles como `insert()`, `pop()`, `sort()`, etc.
- **Experimentar** directamente en el entorno para entender el comportamiento de cada método.

---

#### ✅ Conclusión introduccion a las listas

Las **listas** permiten trabajar de manera flexible y dinámica con conjuntos de datos. Son esenciales en Python para la
manipulación básica de datos, desde el acceso y modificación hasta la iteración y cálculos numéricos.

### Otras funciones de manipulacion de listas

Hemos estudiado algunos métodos en clase, y además de esos, podemos utilizar otros para manipular listas en Python. Vamos
a conocerlos y ver ejemplos de cómo se utilizan. En todos los casos, utilizaremos la siguiente lista llamada "razas_de_perros":

razas_de_perros = ['Labrador Retriever',
                   'Bulldog Francés',
                   'Pastor Alemán',
                   'Poodle']

- **insert()**, que permite insertar un elemento en una posición específica de la lista. La sintaxis es `lista.insert(indice, elemento)`,
donde "lista" es la lista que recibirá el nuevo elemento, "indice" es la posición donde se insertará el nuevo elemento y "elemento"
es el nuevo elemento que se insertará.

```python
  razas_de_perros.insert(1, 'Golden Retriever')
  razas_de_perros
  Copia el código
```

Salida: ['Labrador Retriever', 'Golden Retriever', 'Bulldog Francés', 'Pastor Alemán', 'Poodle']

Siguiendo este enfoque, la estructura `lista.insert(len(lista), elemento)` es equivalente al uso del método append().

- **pop()** elimina el elemento en una posición específica de la lista y lo devuelve como salida al ejecutar el método. Solo
necesitamos especificar, entre paréntesis, el índice del elemento que deseamos eliminar, y se eliminará de la lista. Por
lo tanto, eliminemos la raza "Golden Retriever" que agregamos en el método anterior.

```python
  razas_de_perros.pop(1)
  Copia el código
```

Salida: 'Golden Retriever'

- **index()** devuelve el índice de un elemento específico en la lista. Para hacerlo, especificamos el elemento entre
- paréntesis. Para encontrar el índice de la raza "Pastor Alemán" en la lista, hacemos lo siguiente:

```python
  razas_de_perros.index('Pastor Alemán')
  Copia el código
```

Salida: 2

- **sort()** ordena los elementos de la lista en orden ascendente o descendente. Si son palabras, el orden se basa en el
- orden alfabético o en el orden inverso. Para ordenar los valores, simplemente llamamos al método sort(), y la lista se
- organizará en orden. Para ordenar alfabéticamente la lista de razas de perros, podemos usar el siguiente código:

```python
  razas_de_perros.sort()
  razas_de_perros
  Copia el código
```

Salida: ['Bulldog Francés', 'Labrador Retriever', 'Pastor Alemán', 'Poodle']

### Diccionarios

---

#### 📘 ¿Qué es un Diccionario en Python?

Un **diccionario** (`dict`) es una estructura de datos que almacena información en **pares clave-valor**. A diferencia de
las listas (que usan corchetes `[]`), los diccionarios se crean con **llaves `{}`**.

##### ✅ Características

- Cada **clave (key)** es **única** dentro del diccionario.
- Cada **clave** está asociada a un **valor (value)**.
- Se usa la sintaxis: `"clave": valor`.

> En otros lenguajes de programación, esta estructura es conocida como **mapa (map)**.

---

#### 🛠️ Creación y Manipulación de Diccionarios

##### 🔹 Crear un diccionario simple

```python
diccionario = {
  "clave1": 1,
  "clave2": 2
}
```

##### 🔹 Consultar el tipo de dato

```python
type(diccionario)  # dict
```

---

##### 📋 Caso práctico: Información de un estudiante

Se modela la información de matrícula de un estudiante con un diccionario:

```python
estudiante = {
  "matrícula": 2168933,
  "día_registro": 25,
  "mes_registro": 10,
  "grupo": "2E"
}
```

##### 🔍 Acceso a valores mediante claves

```python
estudiante["matrícula"]  # 2168933
estudiante["grupo"]      # "2E"
```

##### 🔄 Actualizar un valor

```python
estudiante["grupo"] = "2G"
```

##### ➕ Añadir un nuevo par clave-valor

```python
estudiante["modalidad"] = "educación a distancia"
```

##### 📏 Obtener el tamaño del diccionario

```python
len(estudiante)  # 5
```

---

#### 📌 Conclusión intro diccionarios

Los **diccionarios** permiten organizar y acceder a datos de manera eficiente a través de claves únicas. Se pueden:

- Crear y estructurar fácilmente.
- Modificar valores.
- Añadir nueva información.
- Consultar el tamaño de la colección.

---

Claro, aquí tienes el **resumen en formato Markdown** del texto solicitado, con los **conceptos clave relacionados**:

---

#### Métodos y Manipulación de Diccionarios en Python

##### 🔑 ¿Qué es un Diccionario?

- Estructura de datos que permite almacenar información en **pares clave\:valor**.
- Las claves son únicas y permiten identificar rápidamente sus valores asociados.
- Ejemplo real: como un diccionario tradicional de palabras y definiciones.

---

##### 🛠 Métodos fundamentales para manipular diccionarios

| Método       | Descripción                                               |
| ------------ | --------------------------------------------------------- |
| `pop(clave)` | Elimina un par clave-valor y devuelve su valor.           |
| `items()`    | Devuelve una lista de tuplas con los pares clave-valor.   |
| `keys()`     | Devuelve una lista con todas las claves del diccionario.  |
| `values()`   | Devuelve una lista con todos los valores del diccionario. |

---

##### 🔁 Iteración sobre un diccionario

- Se puede **iterar directamente** sobre las claves:

  ```python
  for clave in estudiante.keys():
      print(clave)
  ```

- También se puede iterar sobre los pares clave-valor usando `items()`:

  ```python
  for clave, valor in estudiante.items():
      print(clave, "→", valor)
  ```

---

##### 📌 Conceptos relacionados

- **Tupla**: estructura de datos **inmutable**, útil en ciertos contextos; `items()` devuelve tuplas.
- **Iterable**: tanto las claves como los valores devueltos son objetos que pueden recorrerse en bucles `for`.

---

##### 🧩 Importancia para Ciencia de Datos

- Los diccionarios son especialmente útiles para representar datos estructurados.
- Combinados con listas, permiten crear estructuras más complejas como registros, catálogos o matrices de datos.
- Su flexibilidad los convierte en una herramienta fundamental en tareas de análisis, limpieza y transformación de datos.

---

#### Elementos dentro de elementos

Podemos asociar estructuras de datos a otras estructuras de datos, como ocurre cuando tenemos listas dentro de
diccionarios. En este caso, las listas pueden ser almacenadas en los valores de un diccionario de tal manera que cada clave
puede tener una lista asociada a ella. Esto es útil cuando necesitamos almacenar varios valores relacionados con una sola
clave.

Por ejemplo, podemos construir un conjunto de datos de una tienda que contenga una clave con los nombres de cada producto
y otra clave con los precios correspondientes, como se muestra en el código a continuación:

```python
tienda = {'nombres': ['televisión', 'celular', 'notebook', 'geladeira', 'estufa'],
          'precios': [2000, 1500, 3500, 4000, 1500]}
```

Para acceder a los valores, podemos utilizar una estructura de bucles for:

```python
for clave, elementos in tienda.items():
  print(f'Clave: {clave}\nElementos:')
  for dato in elementos:
    print(dato)
```

El primer bucle, el más externo, recorre los elementos dentro del diccionario (claves y elementos). Sabiendo que los
elementos son listas, podemos acceder a los datos de las listas con otro bucle anidado que se encuentra dentro del primer
bucle.

El bucle más interno recorre los elementos de cada lista uno a uno e imprime los valores dentro de ellas.

Además, podemos realizar operaciones comunes en las listas, como agregar, eliminar o contar elementos en la lista asociada
a una clave del diccionario. Puedes copiar los códigos anteriores y ejecutarlos en Colab para verificar la salida.

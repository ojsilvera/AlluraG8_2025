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

## Estructuras de repetición

## Estructuras de datos

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

### ⚙️ Herramienta utilizada

* **Google Colab:** entorno en línea para codificar en Python sin necesidad de instalaciones locales.

---

### Importando bibliotecas

* Se recomienda usar **Google Chrome** para acceder a **Google Colab**:
  👉 [colab.research.google.com](https://colab.research.google.com)
* Colab permite abrir notebooks desde:

  * Google Drive
  * GitHub (si está conectado a tu cuenta)
  * Subida directa desde tu máquina local

## 💻 Uso de Google Colab

* Utiliza una **máquina virtual con Python 3 ya instalado**
* Ventajas:

  * No requiere instalación local
  * Ahorro de recursos del computador propio
  * Acceso gratuito a:

    * \~13 GB de RAM
    * \~107 GB de almacenamiento

## 🧰 Entorno de desarrollo

* No se profundiza en la interfaz de Colab, ya cubierta en un entrenamiento anterior.
* Python permite trabajar con **bibliotecas (librerías)**, que contienen módulos y funciones reutilizables.

## 📦 Instalación de bibliotecas en Colab

* Se usa `pip` para instalar paquetes desde el sistema Linux subyacente:

  ```python
  !pip install matplotlib
  ```

* El símbolo `!` ejecuta comandos del sistema operativo desde la celda del notebook.

## 🔍 Verificación de la instalación y versión

1. Intentar consultar versión directamente da error si no se ha **importado** la biblioteca:

   ```python
   import matplotlib
   matplotlib.__version__
   ```

2. Importación con alias (buena práctica para gráficos):

   ```python
   import matplotlib.pyplot as plt
   ```

## 🗂 Repositorio PyPI (Python Package Index)

* Se accede a [pypi.org](https://pypi.org) para ver:

  * Descripción de paquetes
  * Historial de versiones
  * Documentación y enlaces útiles

### Versión de ejemplo

* **Versión actual**: `3.8.1`
* **Colab usa** por defecto: `3.7.1`

  * Esto se debe a prácticas de **estabilidad y compatibilidad**.

## 🔄 Instalación de versión específica

Para asegurar compatibilidad entre desarrolladores (serialización de entornos):

```python
!pip install matplotlib==3.8.1
```

* Requiere:

  * Desinstalación de versión anterior
  * **Reinicio del entorno de ejecución**:

    * Menú: Entorno de ejecución → Reiniciar entorno
    * O botón directo en Colab

## 📊 Submódulo pyplot

* **pyplot** es el submódulo más usado para graficar en Python.
* Importación recomendada:

  ```python
  import matplotlib.pyplot as plt
  ```

* Permite acceder a métodos como:

  ```python
  plt.show()
  ```

## 🧠 Buenas prácticas destacadas

* Importar solo lo necesario (submódulos, no toda la biblioteca)
* Usar alias para facilitar el código (`as plt`)
* Trabajar con versiones estables o forzar versiones específicas para evitar errores futuros

---

## Funciones

## Estructuras de datos

## Estructuras anidadas

## Trabajando con excepciones

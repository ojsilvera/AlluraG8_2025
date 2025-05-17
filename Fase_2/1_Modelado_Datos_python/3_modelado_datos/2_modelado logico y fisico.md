# Modelado de bases de datos relacionales: modelado lógico y físico

## Tipos de modelado

### Presentación

---

  1. **Modelo conceptual**
  2. **Modelo lógico**
  3. **Modelo físico**

---

### 🔹 Modelo Conceptual

* Se representa mediante un **diagrama entidad-relación (ER)**.
* Permite definir las **entidades**, **atributos**, **relaciones**.
* Es la base para construir el modelo lógico.

---

### 🔹 Modelo Lógico

* Evolución del modelo conceptual.
* Representa estructuras que se **parecen a tablas**.
* Incluye **campos** e **identificadores**.
* No está vinculado aún a un SGBD específico.
* Incluye relaciones y restricciones entre entidades.

---

### 🔹 Modelo Físico

* Etapa final de diseño de la base de datos.
* Las entidades del modelo lógico se convierten en **tablas reales**.
* Se definen:

  * **Tipos de datos**
  * **Dominios de los atributos**
  * **Restricciones físicas**
* Especificación de un **SGBD** (Sistema de Gestión de Base de Datos) adecuado.

---

### 🔹 SGBD (Sistema de Gestión de Base de Datos)

* Se selecciona en función del modelo físico.
* Permite implementar y gestionar la base de datos real.

---

## 🧪 Ejercicio descrito en el video

* Partir de un modelo conceptual preexistente (ER).
* Convertirlo en modelo lógico con campos y relaciones.
* Finalmente, transformarlo en modelo físico incluyendo:

  * Tipos de datos
  * Restricciones
  * Dominio
* Preparar el entorno de trabajo para comenzar con el modelado.

---

## 🔁 Esquema tipo **flowchart Mermaid**

```mermaid
flowchart TD
    A[Inicio del curso] --> B[Modelo Conceptual]
    B --> C[Diagrama Entidad-Relación (ER)]
    C --> D[Entidades, Atributos, Relaciones]
    D --> E[Modelo Lógico]
    E --> F[Similitud con Tablas]
    F --> G[Campos e Identificadores]
    G --> H[Modelo Físico]
    H --> I[Conversión a Tablas Reales]
    I --> J[Dominio y Restricciones]
    J --> K[Selección del SGBD]
    K --> L[Implementación de la BD]
```

### Diversos modelos

---

### 🔹 Fases del modelado de bases de datos

* **Modelo conceptual → Modelo lógico → Modelo físico**

---

### 🔹 Modelo Conceptual concepto

* Fue realizado previamente por Martha y su equipo.
* Representado mediante un **diagrama entidad-relación (ER)**.
* Define entidades y relaciones a alto nivel, sin detalles técnicos.

---

### 🔹 Modelo Lógico conceptos

* Se construye **a partir del modelo conceptual**.
* Se asemeja más a una base de datos real.
* En esta fase:

  * **Las entidades se convierten en relaciones** (tablas).
  * Se definen **campos** y **restricciones**.
  * Se especifican:

    * **Cardinalidad mínima y máxima**.
    * Relación entre entidades.
  * Se usa la herramienta **diagrams.net** con formato **vertical**.

---

### 🔹 Modelo Físico conceptos

* Se construye a partir del modelo lógico.
* Implementado con la herramienta **SQL Power Architect**.
* En esta fase:

  * Las relaciones ya se denominan **tablas**.
  * Los campos se conocen como **columnas**.
  * Se definen:

    * **Dominios**
    * **Tipos de datos**
    * **Restricciones (ej. NOT NULL, claves primarias/foráneas)**
    * **Aceptación de valores nulos**
  * Se incorpora **simbología de cardinalidad** (ej. pata de gallina).

---

### 🔹 Herramientas mencionadas

* **diagrams.net**: Para diseño del modelo lógico.
* **SQL Power Architect**: Para creación del modelo físico.

---

## 🧪 Ejercicio descrito

* Retomar el **modelo conceptual** ya creado por Martha y su equipo.
* Convertirlo en un **modelo lógico**, incluyendo relaciones, campos, cardinalidades y restricciones.
* Representarlo en **formato vertical** usando **diagrams.net**.
* Luego, transformar ese modelo lógico en un **modelo físico** con **SQL Power Architect**, definiendo dominios, restricciones, tipo de datos y cardinalidades visuales.
* Prepararse para iniciar la construcción del modelo lógico en el próximo video.

---

## 🔁 Esquema modelado logico y fisico

```mermaid
flowchart TD
    A[Inicio del entrenamiento] --> B[Modelo Conceptual]
    B --> C[Diagrama Entidad-Relación (ER)]
    C --> D[Convertir a Modelo Lógico]
    D --> E[Usar diagrams.net]
    E --> F[Formato vertical]
    F --> G[Relaciones, Campos, Restricciones, Cardinalidades]
    G --> H[Convertir a Modelo Físico]
    H --> I[Usar SQL Power Architect]
    I --> J[Tablas, Columnas, Dominios]
    J --> K[Tipo de dato, NOT NULL, Claves]
    K --> L[Simbología de Cardinalidad]
    L --> M[Base de datos lista para implementación]
```

### Características de MLD y MFD

Una de las integrantes del equipo de Martha, Johanna, estaba tratando de entender las características que diferencian los
Modelos Lógicos de Datos (MLDs) de los Modelos Físicos de Datos (MFDs). Para ello, a Martha compartió con ella un material
para profundizar sus estudios y prepararla para la implementación del proyecto de bases de datos del Club del Libro.

¡Vamos a ayudarle a Johanna!

De acuerdo con lo que aprendimos en los videos, ¿Cuáles alternativas definen mejor las características y diferencias entre
los Modelos Lógicos de Datos (MLDs) y los Modelos Físicos de Datos (MFDs)?

El Modelo Físico de Datos (MFD) es ampliamente utilizado en proyectos tanto ágiles como tradicionales y presenta el proyecto
de la base de datos con una mayor riqueza de detalles frente al Modelo Lógico de Datos (MLD). El Modelo Físico de Datos (MFD)
es ampliamente utilizado por presentar detalles como las tablas asociativas, por indicar los tipos de datos de cada campo
y las claves que serán necesarias para trazar las relaciones.

El Modelo Lógico de Datos (MLD) es raramente utilizado en proyectos ágiles, pues el enfoque de este modelo radica en describir
los conceptos de dominio involucrados en una base de datos. El Modelo Lógico de Datos (MLD) raramente es utilizado en proyectos
ágiles, al contrario del Modelo Físico de Datos (MFD).

### Para saber más: representando el modelo lógico

El modelo lógico de datos es creado a partir de las descripciones de los datos representadas en un modelo conceptual. Este
describe cómo los datos serán almacenados en la base de datos, identificando las entidades, los atributos, las claves
principales y foráneas y sus relaciones.

Hay dos formas que podemos utilizar para representar el modelo lógico: La forma horizontal o la forma vertical. Durante
el curso fue utilizada la representación vertical, donde los atributos (que más adelante serán llamados campos) son representados
uno abajo del otro, los atributos clave son identificados y las relaciones son representadas a través de líneas uniendo
una relación a la otra:

![Atributos claves](/AlluraG8_2025/Fase_2/assets/key_atr.png)

En la forma horizontal, los atributos (campos) son presentados uno al lado del otro, los atributos clave son subrayados en
las relaciones y las relaciones son representadas a través de una flecha, que sale de la relación dependiente y llega a la
relación propietaria. Ya las cardinalidades no son representadas, como en el ejemplo a continuación:

![Cardinalidad](/AlluraG8_2025/Fase_2/assets/cardinalidad.png)

Las dos formas son válidas y pueden ser utilizadas para representar el modelo lógico de datos. Normalmente la forma más
    utilizada es la forma vertical, por ser semejante a la representación final de las relaciones en una base de datos.

### Modelado lógico conceptos

---

* Secuencia: **Modelo Entidad-Relación (Conceptual) → Modelo Lógico → Modelo Físico**
* Confirmación de que el **modelo conceptual** está listo para avanzar al modelo lógico.

---

### 🔹 Herramienta utilizada

* **diagrams.net**:

  * Herramienta **online y gratuita**.
  * Permite crear **diagramas tipo tabla** para representar relaciones.
  * No requiere instalación (opcional versión desktop).
  * Se puede trabajar en **modo horizontal o vertical** (en este caso: **vertical**).

---

### 🔹 Configuraciones iniciales de diagrams.net

* **Start now**: iniciar sin crear cuenta.
* Cambiar idioma a español: Extras → Lenguaje.
* Cargar archivo del diagrama entidad-relación guardado previamente.

---

### 🔹 Modelo Lógico proceso

* Utiliza el concepto de **relaciones** (en lugar de entidades).
* Cada **relación** se representa como una **tabla**.
* Se utiliza la opción **"tabla"** desde el menú de entidades.
* Importancia de utilizar correctamente los términos:

  * **Entidad** (Modelo Conceptual) = **Relación** (Modelo Lógico) = **Tabla** (Modelo Físico).
* El diseño será **vertical**.

---

### 🔹 Diagrama Entidad-Relación anterior

* Se reutiliza el **diagrama conceptual anterior**.
* Incluye **cardinalidad mínima y máxima** (ej.: entre "pedido" y "items").

---

### 🔹 Observaciones pedagógicas

* Se aclara que a veces se dirá "relación" o "tabla" indistintamente, pero son equivalentes según el contexto del modelo.
* Se prepara un **modelo lógico en blanco** para iniciar el traspaso del modelo conceptual.
* El proceso detallado de traspaso se abordará en el siguiente video.

---

## 🧪 Ejercicio descrito modelado

1. Acceder a **diagrams.net**.
2. Configurar idioma en español.
3. Abrir el **diagrama entidad-relación** creado anteriormente.
4. Identificar las **entidades y sus relaciones**, junto con la **cardinalidad**.
5. Crear un nuevo diagrama en blanco llamado `modelo_logico`.
6. Seleccionar el formato **vertical**.
7. Insertar **tablas** (relaciones) una por una a partir del modelo conceptual.
8. Preparar el entorno para continuar el modelado lógico en el siguiente video.

---

## 🔁 Esquema de la leccion

```mermaid
flowchart TD
    A[Inicio del video] --> B[Confirmación de modelo conceptual completo]
    B --> C[Acceder a diagrams.net]
    C --> D[Configurar idioma a español]
    D --> E[Abrir diagrama Entidad-Relación previo]
    E --> F[Verificar cardinalidades entre entidades]
    F --> G[Crear nuevo diagrama en blanco: modelo_logico]
    G --> H[Seleccionar formato vertical]
    H --> I[Insertar tablas usando opción "tabla"]
    I --> J[Copiar cada entidad y relación al nuevo modelo lógico]
    J --> K[Prepararse para continuar modelado en próximo video]
```

### Pasos para el MLD

## Modelado lógico

## Modelado físico

## Tipos de datos, tablas y columnas

## Concluyendo el proyecto

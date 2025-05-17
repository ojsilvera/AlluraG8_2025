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

### Para saber más: representando el modelo lógico

### Modelado lógico conceptos

### Pasos para el MLD

## Modelado lógico

## Modelado físico

## Tipos de datos, tablas y columnas

## Concluyendo el proyecto

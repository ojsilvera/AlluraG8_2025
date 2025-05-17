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

### Características de MLD y MFD

### Para saber más: representando el modelo lógico

### Modelado lógico conceptos

### Pasos para el MLD

## Modelado lógico

## Modelado físico

## Tipos de datos, tablas y columnas

## Concluyendo el proyecto

# Modelado de bases de datos en ciencia de datos

## Bases de datos

### Presentación

### **Resumen del entrenamiento: Modelaje de Base de Datos - Alura Latam**

#### **Contenido del curso:**

1. **Introducción al modelo conceptual**

   * Elaboración del esquema conceptual de una base de datos
   * Objetivo: Llegar al **diagrama entidad-relación (DER)**

2. **Temas a tratar:**

   * **Entidades**

     * Qué son
     * Tipos de entidades
   * **Relaciones**

     * Qué son
     * Tipos de relaciones entre entidades
     * **Cardinalidad**
   * **Atributos**

     * Composición de las entidades
     * Tipos de atributos

3. **Herramienta utilizada:**

   * Plataforma online: [diagrams.net](https://www.diagrams.net)
   * Se utilizará para construir el diagrama entidad-relación (DER)

4. **Importancia del modelado:**

   * Primer paso antes de usar un sistema de gestión de base de datos (SGBD)
   * Permite una mejor administración, manipulación y gestión de la base de datos

### El club del libro

El **Club del Libro** se encuentra en una etapa de expansión. Debido al aumento en las ventas y al crecimiento de la empresa,
se ha decidido mejorar la estructura de su base de datos para garantizar una gestión más eficiente de la información.

Para ello, se ha contratado a **Martha**, una especialista en bases de datos, quien trabajará junto a **Pedro** y su equipo
de sistemas dentro de la organización. Pedro planteó de inmediato una pregunta clave:

> “¿Qué sistema de gestión de bases de datos (SGBD) utilizaremos: Oracle, MySQL, SQLite, Cassandra?”

Ante esto, Martha propuso no apresurarse con la elección del software. En lugar de eso, sugirió seguir un enfoque metodológico,
comenzando con reuniones detalladas con todo el equipo para definir los pasos a seguir.

Enfatizó que **antes de seleccionar el SGBD, es fundamental entender el negocio y modelar sus procesos**.

#### **Fases iniciales del proyecto:**

1. **Reuniones con el cliente**

   * Entrevistas para comprender el funcionamiento operativo del Club del Libro.
   * Recolección de **requisitos del negocio**, flujos y necesidades específicas.

2. **Modelado conceptual del dominio**

   * Uso de diagramas, símbolos y representaciones textuales para construir un **modelo de dominio**.
   * Visualización clara de las entidades, relaciones y procesos clave del sistema.

3. **Selección del SGBD**

   * Una vez comprendido el modelo del negocio, se evaluará la tecnología más adecuada para implementar la base de datos.

Martha concluyó esta primera etapa recordando al equipo que:

> “Primero modelamos, después elegimos el SGBD.”

En el próximo paso del proyecto se profundizará en el concepto de **SGBD (Sistema de Gestión de Bases de Datos)**, para
asegurar que todo el equipo tenga claridad sobre su función y características.

---

### Para saber más: diferencia entre modelos

📦 Modelado de Datos
│  └── Estructura los datos antes de la construccion de la base de datos
│      └──Incluye recopilación, tratamiento y estructuración de datos.
│
├── 🧠 Modelo Conceptual
│   └── Comprender requisitos del sistema y del negocio
│       └── Explora estructuras y conceptos del negocio
│
├── 🧩 Modelo Lógico
│   └── Describe cómo se almacenarán los datos
│       ├── *Define* entidades
│       ├── *Define* atributos
│       ├── *Define* claves primarias y foráneas
│       └── *Establece* relaciones
│
└── 🛠️ Modelo Físico
    └── Describe la implementación técnica de la base de datos
        ├── Define tablas y columnas
        ├── Define relaciones entre tablas
        └── Utiliza lenguaje SQL

### Entendiendo SGBD

🔹 Contexto

   Martha fue contratada para liderar el modelado de la base de datos del Club del Libro, organización en expansión que
   necesita estructurar eficientemente su información. Durante las primeras reuniones con el equipo, surgieron dudas sobre
   qué tecnología usar, como Oracle, MySQL o Cassandra. Sin embargo, Martha aclaró que antes de elegir un SGBD, es necesario
   entender los procesos del negocio.

🔹 Desarrollo

   Pedro, miembro del equipo de sistemas, propuso empezar directamente con un SGBD.

   Martha corrigió esta aproximación, enfatizando que el modelado conceptual es el primer paso.

   Explicó que:

      el SGBD (Sistema de Gestión de Base de Datos) es solo la herramienta para manipular la información una vez diseñada
      la estructura lógica y conceptual de los datos.

   Se resaltó la necesidad de comprender bien los requisitos del negocio para luego pasar al diseño de la base de datos.
   Martha hizo una distinción clara entre los niveles de lenguaje involucrados:

      El modelo conceptual, por ejemplo, es un modelo de alto nivel y los modelos físicos son considerados de bajo nivel.

      Lenguaje de alto nivel → utilizado en el modelado conceptual, Ya el modelo de bajo nivel es más cercano al lenguaje
      de la máquina

      Lenguaje de bajo nivel → relacionado con el funcionamiento del SGBD, es más cercano al lenguaje humano.

      Un ejemplo de modelo de alto nivel conceptual es la representación de la estructura del banco de datos a través de
      formas geométricas.

      Un ejemplo de modelo de bajo nivel físico es la creación de un proyecto para la estructuración del banco de datos
      a través de comandos que serán interpretados por la máquina.

🔹 Resultado

   El equipo comprendió que no se trata solo de elegir un software, sino de diseñar una base de datos funcional basada
   en la comprensión del negocio.

   Se acordó trabajar primero el modelado conceptual antes de seleccionar herramientas tecnológicas.

   Se generó conciencia sobre la diferencia entre decir "base de datos MySQL" y entender que eso en realidad es un SGBD.

🔹 Conclusión

   Martha guiará al equipo paso a paso desde el modelado conceptual, usando un enfoque basado en entrevistas y comprensión
   de procesos, para garantizar que el sistema resultante sea coherente, útil y escalable.

```mermaid
graph LR
A[Modelado de Datos] --> B[Modelo Conceptual]
A --> C[Modelo Lógico]
A --> D[Modelo Físico]
B --> E[Lenguaje de alto nivel]
B --> F[Requisitos del negocio]
B --> G[Entrevistas, diagramas, símbolos]
C --> H[Entidades, atributos, claves]
C --> I[Relaciones y reglas del dominio]
D --> J[Tablas, columnas, relaciones]
D --> K[SQL: lenguaje específico]
D --> L[SGBD: Oracle, MySQL, SQL Server]
style A fill:#cce5ff,stroke:#333,stroke-width:2px
style B fill:#d4edda
style C fill:#fff3cd
style D fill:#f8d7da
```

### Escogiendo la aplicación

Claro, aquí tienes el texto ordenado y separado en dos partes claras: una parte correspondiente a la
**solución del ejercicio** (lo que hace el equipo) y otra a los **conceptos fundamentales** (el conocimiento que se explica).

---

## ✅ SOLUCIÓN DEL EJERCICIO

### 🔹 Contexto

Tras comprender la importancia del **modelo conceptual** gracias a la explicación de Martha, el equipo —liderado por Pedro— entendió que debía construir un **esquema gráfico** representando los elementos clave del negocio.

### 🔹 Desarrollo

El equipo se preguntó si podían usar herramientas simples como **PowerPoint** o **Paint** para realizar el gráfico del
modelo conceptual. Martha respondió afirmativamente, aclarando que lo importante en esta fase era representar visualmente el modelo.

Sin embargo, también destacó que si bien cualquier software gráfico puede servir, sería más eficiente utilizar una herramienta
que **facilite convertir ese modelo conceptual en un modelo lógico más adelante**.

### 🔹 Resultado

Martha sugirió usar **diagrams.net**, una herramienta en línea, gratuita y especializada en la creación de diagramas para
modelado de datos, ideal para este tipo de trabajo.

El equipo accedió a seguir su recomendación y se preparó para aprender a utilizar esta herramienta en la siguiente sesión.

---

## 📌 CONCEPTOS CLAVE – VISUAL EXPLICATIVO

```mermaid
flowchart TB
    A[Modelado de Base de Datos] --> B[Modelo Conceptual]
    B --> C[Representación gráfica de entidades y relaciones]
    B --> D[Herramientas para diagramar]
    D --> E[PowerPoint, Paint básico]
    D --> F[diagrams.net recomendado]

    F --> G[Facilita conversión a modelo lógico]
    G --> H[Modelo Lógico]
```

---

### 📘 RESUMEN DE CONCEPTOS

| Concepto                     | Explicación                                                                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Modelo Conceptual**        | Representación visual de los elementos del negocio (entidades, relaciones, atributos), sin detalles técnicos.                           |
| **Software de Diagramación** | Cualquier programa que permita crear gráficos puede utilizarse, pero se recomienda uno que facilite el paso posterior al modelo lógico. |
| **diagrams.net**             | Herramienta gratuita, en línea y especializada en diagramas, ideal para modelado de bases de datos.                                     |

---

### Usando diagrams.net

Claro, aquí tienes el texto reorganizado separando claramente lo que corresponde al **ejercicio práctico** (lo que hace
el equipo y cómo usan la herramienta) y lo que corresponde a los **conceptos fundamentales** (lo que se enseña sobre diagrams.net y el modelado):

---

## ✅ SOLUCIÓN DEL EJERCICIO – PASOS DESARROLLADOS

### 🔹 Selección de la herramienta

* Martha y el equipo identificaron que antes de comenzar con el modelado conceptual necesitaban una herramienta para crear el esquema.
* Martha sugirió **diagrams.net**, una plataforma gratuita disponible en línea, sin necesidad de registro.

### 🔹 Acceso y configuración básica

* Acceden al sitio web: **diagrams.net**.
* Eligen la opción **"Start now"** para iniciar sin descargar nada.
* Se les presenta la opción de **dónde guardar los archivos**: Google Drive, OneDrive, Dropbox, GitHub, localmente o
  decidir después. Para avanzar, eligen "Decidir después".
* Renombran el archivo inicial como **modelo.xml**.

### 🔹 Personalización de la interfaz

* Cambian el idioma desde **Extras > Language > Español**.
* Recargan la página para aplicar el cambio.

### 🔹 Organización del espacio de trabajo

* Desde el menú **Vista**, eliminan categorías de formas innecesarias (general, básico, flechas, diagrama de flujo) y
  dejan solo la opción **“Diagrama de entidad-relación”**.
* Identifican:

  * Área izquierda: herramientas y objetos disponibles.
  * Área central: lienzo o área de trabajo.
  * Panel derecho: propiedades del diagrama (estilo, cuadrícula, vista, tamaño de página, etc.).

---

## 📘 CONCEPTOS CLAVE – EXPLICACIÓN DIDÁCTICA

```mermaid
graph LR
    A[diagrams.net]

    A --> B[Acceso sin cuenta]
    A --> C[Multiplataforma]
    A --> D[Gratuita y Online]

    A --> E[Tipos de almacenamiento]
    E --> E1[Google Drive]
    E --> E2[OneDrive]
    E --> E3[Dropbox]
    E --> E4[Local / GitHub / Decidir despues]

    A --> F[Formatos de archivo]
    F --> F1[XML]
    F --> F2[Imagen vectorial]
    F --> F3[Bitmap]
    F --> F4[HTML]

    A --> G[Idioma]
    G --> G1[Extras - Language - Español]

    A --> H[Estructura de la interfaz]
    H --> H1[Area izquierda - Herramientas]
    H --> H2[Area central - Lienzo de trabajo]
    H --> H3[Panel derecho - Estilo, cuadrícula, etc.]

    A --> I[Personalización de vista]
    I --> I1[Ocultar elementos innecesarios]
    I --> I2[Enfocarse en Entidad-Relación]
```

---

## Modelado entidad relacion

### El mini-mundo

1. Mini-mundo

   Definición: Recorte o fragmento del mundo real.

   Objetivo: Analizar una pequeña porción del entorno con profundidad.

   Importancia: Es la base sobre la que se estructura el modelo de base de datos.

2. Abstracción

   Definición: Proceso mental para aislar detalles específicos de un conjunto complejo.

   Permite:

   Ignorar detalles irrelevantes.

   Enfocarse en lo esencial.

   Manejar diferentes niveles de detalle según el propósito.

   Ejemplos:

   Descripción de un caballo (subjetiva).

   Programación de una agenda (por bloques de tiempo).

3. Aplicación práctica del Mini-mundo

   Caso: E-commerce del Club del Libro.

   Entidades:

   Carlos (Cliente)

   Victoria (Autora)

   Libros

   Relaciones:

   Carlos → compra → Libros.

   Victoria → escribe → Libros.

4. Base de datos relacional

   Relaciona entidades mediante vínculos lógicos.

   Diferente de bases de datos no relacionales (no se centran en relaciones).

   Enfoque del curso: Modelado conceptual de bases de datos relacionales.

**Resumen esquematico**

```mermaid
flowchart LR
    A[Inicio: Conceptos clave para modelado de BD]

    A --> B[Mini-mundo]
    B --> B1[Definición: Recorte del mundo real]
    B --> B2[Objetivo: Analizar una porción del entorno]
    B --> B3[Base para el modelo de base de datos]

    A --> C[Abstracción]
    C --> C1[Definición: Aislar aspectos específicos]
    C --> C2[Propósito: Simplificar análisis]
    C --> C3[Características]
    C3 --> C3a[Ignorar detalles]
    C3 --> C3b[Enfocar en lo esencial]
    C3 --> C3c[Subjetividad]
    C --> C4[Ejemplos]
    C4 --> C4a[Describir un caballo]
    C4 --> C4b[Programar una agenda]

    A --> D[Caso práctico: Club del Libro]
    D --> D1[Contexto: E-commerce de libros]
    D --> D2[Entidades]
    D2 --> D2a[Carlos - Cliente]
    D2 --> D2b[Victoria - Autora]
    D2 --> D2c[Libros]
    D --> D3[Relaciones]
    D3 --> D3a[Carlos compra Libros]
    D3 --> D3b[Victoria escribe Libros]

    A --> E[Base de Datos Relacional]
    E --> E1[Relaciones entre entidades]
    E --> E2[Diferente a bases no relacionales]
    E --> E3[Enfoque del curso: Modelado conceptual relacional]
```

### Entrevista con los directores

Aquí tienes el análisis del texto, dividido en **conceptos clave** y **ejercicio planteado**, seguido de un esquema final tipo **mermaid mindmap en Markdown** para visualizar los elementos de forma jerárquica.

---

## ✅ CONCEPTOS CLAVE

### 📌 1. **Análisis de Requisitos**

* Martha se reunió con la directiva del Club del Libro.
* Elaboró un resumen con los requisitos funcionales del negocio.
* El resumen está disponible para consulta y análisis.
* Permite realizar el modelado de la base de datos a partir de esos requerimientos.

### 📌 2. **Identificación del Cliente**

* Tipos de clientes:

  * Persona natural
  * Persona jurídica
* Información requerida:

  * Persona natural: RUT (Registro Único Tributario), DNI
  * Persona jurídica: NIT (Número de Identificación Tributaria), Registro Único de Empresa
* Datos generales comunes:

  * Nombre
  * Dirección
  * Teléfono
  * Email

### 📌 3. **Información del Producto (Libros)**

* Información clave:

  * Título
  * Categoría
  * Código ISBN
  * Año de publicación
  * Valor
  * Casa editorial
  * Autor

### 📌 4. **Editorial**

* Proveedor de libros.
* Cada libro está asociado a **una única editorial** (exclusividad).
* Datos requeridos:

  * Número de la editorial
  * Máximo dos teléfonos
  * Nombre del contacto
  * Email

### 📌 5. **Pedidos de Compra**

* Un cliente puede realizar uno o más pedidos.
* Cada pedido puede contener uno o más libros.

### 📌 6. **Inventario**

* Antes de concretar un pedido, se debe verificar la disponibilidad del libro en el inventario.
* Regla de negocio importante: **No vender libros inexistentes**.

---

## 📝 EJERCICIO PROPUESTO

* Analizar el resumen de requisitos.
* Extraer las entidades y atributos principales.
* Realizar la **abstracción de datos**.
* Proponer un modelo conceptual (diagrama ER).
* Opcional: compartir observaciones y análisis en el foro del curso.

---

## 🧠 Modelado de requisitos

```mermaid
mindmap
  root((Modelado de requsitos y relaciones))

   Requisitos
      Martha se reúne con la directiva
      Elabora resumen de requisitos
      Resumen disponible para análisis

   PedidoCompra
      Un cliente puede hacer múltiples pedidos
      Cada pedido incluye uno o más libros

   Inventario
      Verificación previa a la venta
      No vender libros no disponibles

   Ejercicio
      Analizar resumen
      Extraer entidades/atributos
      Hacer abstracción
      Proponer modelo conceptual
      Compartir análisis en el foro


```

---

## Modelado logico de la base de pedidos

```mermaid
mindmap
  root((Modelado BD: Base datos pedidos))
    Pedidos
        Id_Pedido
        Fecha_Pedido
        Observaciones_Pedido
        Valor_libro
        Id_cliente
        ID_Libro
    Clientes
        ID cliente
        Nombre Completo
        ID_Tipo cliente
        ID_Tipo documento
    Datos personales
        ID_DatoPersonal
        Dirección
        Teléfono
        Email
        Id_cliente
    Tipos cliente
        ID_TipoCliente
        Persona natural
        Persona jurídica
    Tipo documento
        ID_TipoDocumento
        RUT
        DNI
        CC
        NIT
        Registro Empresa
    Libro
      ID_Libro
      ID_editorial
      Título
      Categoría
      ISBN
      Año publicación
      Valor
      Casa editorial
      Autor
    Editorial
      ID_Editorial
      Proveedor exclusivo del libro
      Número de editorial
      Máximo 2 teléfonos
      Contacto
      Email
```

---

### Para saber más: la importancia de las entrevistas

El modelado de datos es la base para lograr un buen proyecto final del banco de datos. Una de las etapas más importantes
de este proceso es la entrevista con los(as) clientes, en la cual serán identificadas las reglas de negocio del proyecto.

Cuando no identificamos las necesidades del proyecto, puede presentarse la necesidad de realizar esta etapa nuevamente,
generando así, retrasos en todo el proceso.

La entrevista dará toda la dirección a nuestro proyecto. A través de ella, conocemos todos los detalles del negocio y
podemos estructurar los próximos pasos. Un factor importante de este proceso es saber de quién vamos a recopilar la
información, o sea, debemos entrevistar a una o a más personas que puedan brindarnos todos los detalles importantes del
negocio.

Otro factor es escoger las preguntas ideales para definir todos los puntos clave del proyecto. En esta etapa, la persona
que realiza la entrevista necesita tener un conocimiento previo sobre los puntos más relevantes para la construcción del
proyecto, lo que posibilita recolectar la información realmente esencial para el modelado del banco de datos.

En resumen, la entrevista es la base para construir un proyecto coherente que atienda las necesidades del cliente.

### MER y DER

### Diferencia entre MER y DER

## Entidades

## Diagrama Entidad-Relacion

## Atributos

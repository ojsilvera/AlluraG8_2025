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

## Resumen esquematico

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

Aquí tienes el análisis del segundo texto. Separamos los **conceptos clave** de la parte **ejercicio/instrucción**, y al final te presento un **esquema tipo mindmap en Mermaid para Markdown**.

---

## ✅ CONCEPTOS CLAVE MER y DER

### 📌 1. **Motivación del equipo**

* El equipo (Pedro, Martha y demás) está entusiasmado por comenzar con el modelo conceptual de la base de datos.

### 📌 2. **Diferencia entre MER y DER**

* **MER (Modelo Entidad-Relación):**

  * Representación **abstracta** del modelo conceptual.
  * Describe **objetos (entidades)**, **características (atributos)** y **relaciones**.
  * Es la **idea** del sistema de datos.

* **DER (Diagrama Entidad-Relación):**

  * **Representación gráfica** del MER.
  * **Materializa** visualmente el modelo conceptual.
  * Ayuda a la **comunicación** entre los miembros del equipo.

* ⚠️ Aclaración: MER ≠ DER
  Aunque suelen confundirse, **el MER es conceptual**, y **el DER es visual/tangible**.

### 📌 3. **Importancia del DER**

* Mejora la comunicación del equipo.
* Permite una comprensión común de las relaciones entre entidades.

### 📌 4. **Herramienta utilizada**

* Se usará **diagrams.net** (herramienta online gratuita) para crear el DER.

### 📌 5. **Fuente del modelo**

* El DER se construirá a partir del **resumen de la entrevista** entre Martha y los directivos del Club del Libro.

---

## 📝 EJERCICIO PROPUESTO BASE DE DATOS

* Esperar a profundizar en el concepto de **entidad** antes de iniciar el modelado práctico.
* Próxima clase abordará el concepto de entidad.
* El equipo debe prepararse para trabajar directamente sobre el DER utilizando el resumen anterior como base.

---

## 🧠 Mermaid Mindmap en Markdown

```mermaid
mindmap
  root((MER vs DER - Modelado de BD))

    Equipo
      Martha, Pedro y colaboradores
      Desean comenzar con el modelo conceptual

    MER
      Modelo Entidad-Relación
      Representación abstracta
      Describe entidades, atributos y relaciones
      Modelo conceptual del comportamiento de la BD

    DER
      Diagrama Entidad-Relación
      Representación gráfica del MER
      Tangible y visual
      Facilita comunicación en el equipo

    Diferencias
      MER = Concepto
      DER = Gráfico
      No son sinónimos

    Herramienta
      diagrams.net (para crear el DER)

    Ejercicio
      Construir DER con base en entrevista de Martha
      Próxima clase: definición de "entidad"
      Prepararse para modelar
```

---

### Diferencia entre MER y DER

El MER es un modelo conceptual usado para describir los objetos (entidades) con sus características (atributos) y cómo
estas se relacionan entre sí (relaciones). En cuanto que el DER es una representación gráfica que ayuda a visualizar la
información en situaciones prácticas.

Mientras que MER es un modelo conceptual, el DER es su representación gráfica y principal herramienta.

## Entidades que son

### Qué son entidades

---

#### 📘 Entidad

* Objeto único en el mundo real (persona, cosa, concepto).
* Puede ser tangible (ej. carro) o abstracta (ej. departamento).
* Puede representarse en singular con artículos: el, la, los, un, etc.
* Ejemplos:

  * Clientes → entidad
  * Empresa → entidad
  * Carros → entidad
  * Departamento de ventas → entidad
  * Vendedores → entidad

#### 🧱 Tipos de Entidad

* **Entidad fuerte**:

  * Existe por sí sola.
  * Ejemplo: Cliente.
* **Entidad débil**:

  * Depende de otra entidad para existir.
  * Se verá en detalle más adelante.

#### 🧰 Representación en diagramas

* Se usan **rectángulos** para representar entidades.
* También se pueden usar rectángulos con esquinas redondeadas (forma alternativa).
* Se colocan en el lienzo arrastrando el objeto desde el panel izquierdo.
* Se nombra en **singular** (ej. Cliente, no Clientes).

#### 💻 Herramienta: diagrams.net

* Requiere iniciar sesión para guardar el progreso.
* Dispone de varios objetos para modelado (tabla, fila, lista, ítem, entidad, atributos).
* La entidad se crea con un clic y se puede renombrar con doble clic.

---

#### 🧪 Ejercicio Práctico

1. Ingresar a **diagrams.net**.
2. Crear una **entidad** en el lienzo.
3. Usar rectángulo desde el menú izquierdo.
4. Nombrar la entidad como **Cliente** (forma singular).
5. Prepararse para introducir **entidades fuertes y débiles** en próximas lecciones.

---

#### 🧠 Esquema Mermaid Flowchart en Markdown

```mermaid
flowchart LR
    A[Inicio: Aula 3] --> B[Concepto de Entidad]

    B --> C[Entidad = Objeto único del mundo real]
    C --> C1[Puede ser una persona, cosa o concepto]
    C --> C2[Se identifica con artículos: el, la, los, un...]

    C --> D[Ejemplos de entidades]
    D --> D1[Clientes]
    D --> D2[Empresa]
    D --> D3[Carros]
    D --> D4[Departamento de Ventas]
    D --> D5[Vendedores]

    B --> E[Tipos de entidades]
    E --> E1[Entidad fuerte → existe por sí sola (ej. Cliente)]
    E --> E2[Entidad débil → depende de otra entidad]

    B --> F[Representación gráfica en diagrams.net]
    F --> F1[Rectángulos y rectángulos redondeados]
    F --> F2[Entidad se nombra en singular]
    F --> F3[Creación arrastrando desde panel izquierdo]

    B --> G[Herramienta diagrams.net]
    G --> G1[Iniciar sesión]
    G --> G2[Guardar avances]
    G --> G3[Panel con objetos: tabla, fila, lista, entidad...]

    F --> H[Ejercicio práctico]
    H --> H1[Crear entidad "Cliente"]
    H --> H2[Colocarla en el lienzo]
    H --> H3[Nombrarla con doble clic]

    H --> I[Prepararse para próxima clase sobre entidades débiles]
```

---

### Identificando las entidades

Imagina un escenario ficticio en el que fuimos contratados por una floristería que necesita un sistema para el control
de ventas. Inicialmente, será almacenada la información de cada cliente, tales como: Nombre, dirección, fecha de nacimiento
y edad.

En cuanto a cada producto, almacenaremos la descripción, cantidad en inventario y el precio. En esta floristería también
existen las personas colaboradoras, que tienen nombre, dirección, salario y cargo. Escoge la alternativa que indica cuáles
son las entidades presentes en el proyecto de la floristería.

Clientes, Producto y Colaborador(a).

Estas son las entidades del proyecto de la floristería. Cada una de ellas posee atributos que las describen como, por
ejemplo, el atributo precio, de la entidad producto.

### Entidad fuerte vs débil

### **1. Entidades**

* **Entidad Fuerte**

  * Existe de forma independiente.
  * No depende de ninguna otra entidad para existir.
  * Tiene **clave principal (primary key)**.
  * Ejemplos: `Empleado`, `Cliente`.

* **Entidad Débil**

  * Depende de una entidad fuerte para existir.
  * No puede existir sin su entidad asociada.
  * No tiene clave principal, pero sí una **clave parcial**, que junto con la clave de la entidad fuerte, forma una clave compuesta.
  * Representación gráfica: **rectángulo dentro de otro rectángulo**.
  * Ejemplos: `Dependiente`, `Pedido`.

### **2. Relación entre Entidades**

* Una entidad débil **no puede existir sin su entidad fuerte relacionada**.
* Se ilustra con ejemplos como:

  * `Empleado` (fuerte) ↔ `Dependiente` (débil)
  * `Cliente` (fuerte) ↔ `Pedido` (débil)

### **3. Claves**

* **Clave principal** (entidad fuerte): identificador único de la entidad.
* **Clave parcial** (entidad débil): requiere la clave de la entidad fuerte para ser única.

---

## 🧩 **Ejercicio**

* **Escenario del Club del Libro**

  * Se desea registrar empleados y los dependientes de cada empleado para asignar beneficios.
  * No se puede tener **dependientes** sin un **empleado** asociado.
  * En el modelo, `Empleado` se representa como **entidad fuerte**, y `Dependiente` como **entidad débil**.

* **Segundo ejemplo:**

  * Un cliente hace un **pedido de compra**.
  * No puede existir un `Pedido` si no hay un `Cliente`.
  * `Cliente`: entidad fuerte.
  * `Pedido`: entidad débil.

---

## 🧠 **Esquema tipo Merdmind (Markdown)**

```markdown
# Entidades en Diagramas ER

## Entidades
- **Fuerte**
  - Existe por sí misma
  - Tiene clave principal (PK)
  - Ejemplos:
    - Empleado
    - Cliente

- **Débil**
  - Depende de otra entidad
  - No tiene clave principal, usa clave parcial
  - Representación: rectángulo doble
  - Ejemplos:
    - Dependiente (de Empleado)
    - Pedido (de Cliente)

## Relaciones
- Entidad débil ↔ Entidad fuerte
  - Dependencia necesaria
  - Clave compuesta: clave fuerte + clave parcial

## Representación en diagrams.net
- Entidad fuerte → rectángulo simple
- Entidad débil → rectángulo doble

## Ejemplos prácticos
- Club del Libro:
  - Empleado (Fuerte) ↔ Dependiente (Débil)
  - Cliente (Fuerte) ↔ Pedido (Débil)
```

### Entidades en el DER

---

## ✅ **Conceptos Relevantes**

### **1. Identificación de Entidades**

* Una **entidad** es cualquier objeto del mundo real sobre el cual se desea almacenar información.
* Normalmente se identifica como un **sustantivo** dentro del texto (por ejemplo: cliente, libro, editorial...).
* Una entidad puede tener varios **atributos**, que son características o datos relacionados con esa entidad (por ejemplo: nombre, dirección, NIT).

### **2. Entidades Fuertes vs. Débiles** (mencionadas como repaso)

* **Entidad Fuerte**

  * Existe independientemente.
  * No necesita de otra entidad para existir.
* **Entidad Débil**

  * Depende de otra entidad para existir.
  * Se analizarán más adelante para clasificarlas correctamente.

### **3. Atributos**

* No son entidades, pero son **propiedades** que describen una entidad.
* Ejemplos:

  * Cliente → nombre, dirección, teléfono, tipo de persona (natural/jurídica), RUT, NIT.
  * Libro → título.
  * Editorial → información asociada.

### **4. Reglas de Negocio**

* Un **libro solo puede pertenecer a una editorial** (relación uno a uno o uno a muchos).
* Un cliente puede **realizar varios pedidos de compra** (relación uno a muchos).
* Se debe verificar el **inventario antes de procesar un pedido** (condición operativa).

---

## 🧪 **Ejercicio Aplicado**

### **Texto de la entrevista - Extracción de entidades**

#### Entidades identificadas

1. **Cliente**
2. **Libro**
3. **Editorial**
4. **Pedido de compra**
5. **Inventario**

#### Atributos mencionados (por entidad)

* **Cliente**

  * Tipo (persona natural / jurídica)
  * RUT / DNI (natural)
  * NIT / Registro de empresa (jurídica)
  * Nombre
  * Dirección
  * Teléfono

* **Libro**

  * Título

* **Editorial**

  * Información asociada

* **Pedido de compra**

  * (No se mencionan atributos directamente, pero se infiere relación con cliente y libro)

* **Inventario**

  * Disponibilidad del libro

#### Relaciones inferidas

* Cliente **realiza** Pedido(s)
* Pedido **contiene** Libro(s)
* Libro **pertenece a una** Editorial
* Pedido **verifica** Inventario

---

## 🧠 **Esquema**

```markdown
# Modelo Entidad-Relación: Entidades y Conceptos

## 1. Entidades Identificadas
- **Cliente**
- **Libro**
- **Editorial**
- **Pedido de Compra**
- **Inventario**

## 2. Atributos por Entidad
### Cliente
- Tipo (Natural / Jurídica)
- RUT / DNI / NIT
- Nombre
- Dirección
- Teléfono

### Libro
- Título

### Editorial
- Información asociada

### Inventario
- Disponibilidad

## 3. Relaciones
- Cliente → realiza → Pedido de compra
- Pedido de compra → incluye → Libro(s)
- Libro → pertenece a → Editorial
- Pedido de compra → consulta → Inventario

## 4. Reglas de Negocio
- Un libro pertenece a una sola editorial.
- Un cliente puede realizar múltiples pedidos.
- Verificar disponibilidad en inventario antes de procesar pedidos.

## 5. Criterio de Identificación de Entidades
- Se reconocen como **sustantivos** en el texto.
- Atributos no se consideran entidades, describen las entidades.

## 6. Clasificación Futura
- Entidades serán clasificadas como **fuertes** o **débiles** en un análisis posterior.
```

### Entidades fuertes y débiles

Aquí tienes el **análisis del texto**, con los **conceptos relevantes separados del ejercicio**, seguido de un **esquema tipo flowchart en formato Mermaid**.

---

## 🧠 **Conceptos más relevantes**

### 🔹 **Entidades**

Se identifican y clasifican cinco entidades dentro del contexto de un sistema e-commerce de venta de libros:

| Entidad              | Tipo   | Justificación                                                            |
| -------------------- | ------ | ------------------------------------------------------------------------ |
| **Cliente**          | Fuerte | No depende de otra entidad. Puede registrarse sin realizar compras.      |
| **Editorial**        | Fuerte | Es quien produce/publica los libros. No depende de ninguna otra entidad. |
| **Libro**            | Débil  | Necesita estar asociado a una editorial.                                 |
| **Pedido de compra** | Débil  | Depende de la existencia de un cliente y al menos un libro.              |
| **Inventario**       | Débil  | Su existencia depende de los libros que estén disponibles.               |

---

### 🧩 **Criterios para clasificar entidades**

* **Entidad fuerte**: no depende de ninguna otra entidad para existir.
* **Entidad débil**: necesita de otra entidad para tener sentido o existencia.

---

## ✅ **Ejercicio (desarrollo paso a paso)**

1. **Identificación de entidades** a partir del análisis de entrevista.
2. **Clasificación de entidades** en fuertes (resaltadas en amarillo) y débiles (en azul).
3. **Justificación de cada clasificación** a través de reglas del negocio.
4. **Construcción del diagrama** entidad-relación parcial.
5. **Uso de rectángulos dobles para entidades débiles**.
6. **Preparación para próxima etapa**: establecer relaciones entre entidades.

---

## 📊 **Esquema tipo flowchart (Mermaid)**

```mermaid
flowchart TD
    subgraph Entidades_Fuertes [Entidades Fuertes]
        Cliente[Cliente]
        Editorial[Editorial]
    end

    subgraph Entidades_Débiles [Entidades Débiles]
        Libro[[Libro]]
        PedidoCompra[[Pedido de Compra]]
        Inventario[[Inventario]]
    end

    Cliente --> PedidoCompra
    Libro --> PedidoCompra
    Editorial --> Libro
    Libro --> Inventario
```

---

## Diagrama Entidad-Relacion

### Tipos de relaciones

---

### 📌 Reglas del negocio

* Son fundamentales para modelar correctamente la base de datos.
* El equipo debe alinearse con el cliente (el Club del Libro) para comprender **cómo funciona el negocio**.
* Las **transacciones y operaciones** deben reflejarse fielmente en el modelo.

### 📌 Entidades y relaciones

* Ya se han identificado entidades **fuertes** y **débiles**.
* El siguiente paso es **conectar las entidades a través de relaciones**.

### 📌 Relaciones (en diagramas entidad-relación)

* Se **representan con un rombo**.
* Expresan una **acción**, no un sustantivo (ej.: "trabaja en" vs "trabajo").
* Las relaciones pueden ser:

  * **Binarias**: relación entre **2 entidades**.
  * **Ternarias**: relación entre **3 entidades**.
  * **N-arias**: relación entre **más de 3 entidades**.

### 📌 Cardinalidad

* Concepto que define **cómo se relacionan las entidades entre sí** (cuántos de un lado se asocian con cuántos del otro).
* Será explorado en futuras lecciones.

---

## 🧪 Ejercicio o actividad planteada

1. **Analizar la operación del negocio**: cómo se realizan las transacciones en la e-commerce del Club del Libro.
2. **Identificar tipos de relaciones** entre entidades ya conocidas.
3. **Distinguir grados de relación**:

   * Relación binaria: *Colaborador trabaja en función.*
   * Relación ternaria: *Colaborador trabaja en función y proyecto.*
   * Relación N-aria: *Colaborador trabaja en múltiples proyectos, funciones, etc.*
4. Introducir el **concepto de cardinalidad** como tema para futuras sesiones.

---

## 📊 Esquema tipo flowchart (Mermaid)

```mermaid
flowchart TD
    subgraph ReglasDelNegocio
        Negocio[Entender el negocio]
        Operacion[Operación de la e-commerce]
        Transacciones[Transacciones del negocio]
    end

    subgraph EntidadesRelacionadas
        Entidades[Entidades fuertes y débiles]
        Relaciones[Relaciones entre entidades]
        Cardinalidad[Cardinalidad (próximo tema)]
    end

    subgraph TiposDeRelaciones
        Binaria[Relación Binaria: Colaborador - Función]
        Ternaria[Relación Ternaria: Colaborador - Función - Proyecto]
        Naria[Relación N-aria: Colaborador - Múltiples proyectos]
    end

    Negocio --> Operacion --> Transacciones --> Entidades
    Entidades --> Relaciones --> Binaria --> Ternaria --> Naria
    Relaciones --> Cardinalidad
```

---

### Relaciones entre entidades

---

## 🧠 Conceptos más relevantes

### 📌 Relaciones entre entidades

* Las **relaciones** conectan entidades en un diagrama entidad-relación.
* Se representan con un **rombo**.
* Ejemplo de relación: entre **cliente** y **pedido**, la relación es **compra**.
* Las relaciones indican **acciones**, no sustantivos.

### 📌 Uso práctico (con diagram.net)

* Se arrastran conexiones desde las entidades al rombo de relación.
* La acción de conectar se realiza visualmente entre las entidades y el rombo.

### 📌 Ejemplo práctico del sector salud

* Entidades: **Médico** y **Paciente**.
* Escenarios:

  * Un médico puede atender a muchos pacientes.
  * Un paciente puede consultar a muchos médicos.
* Este ejemplo sirve como introducción al concepto de **cardinalidad**.

### 📌 Cardinalidad entre entidades

* Define **cómo se conectan las entidades entre sí**.
* Determina si una relación es:

  * Uno a uno (1:1)
  * Uno a muchos (1\:N)
  * Muchos a muchos (N\:N)
* La cardinalidad es esencial para reflejar correctamente las relaciones en un modelo de base de datos.

---

## 🧪 Ejercicio cardinalidad

1. **Abrir diagram.net** y seleccionar el **rombo** para representar relaciones.
2. **Ejemplo de modelado**: conectar la entidad **Cliente** con **Pedido** mediante la relación **Compra**.
3. **Aplicación del ejemplo de salud**:

   * Identificar relación entre **Médico** y **Paciente**.
   * Observar la **variabilidad de conexiones** posibles.
4. Introducción al concepto de **cardinalidad**, que será tratado a profundidad más adelante.

---

## 📊 Esquema representacion de los conceptos

```mermaid
flowchart TD
    subgraph Diagramacion
        Entidades[Identificar entidades]
        Rombos[Seleccionar rombo en diagram.net]
        Conectar[Conectar entidades al rombo]
        Relacion[Ejemplo: Cliente -- Compra --> Pedido]
    end

    subgraph EjemploSalud
        Medico[Médico]
        Paciente[Paciente]
        Consulta[Consulta Médica]
        Variabilidad[Relación puede ser múltiple en ambos sentidos]
    end

    subgraph Cardinalidad
        CardinalidadIntro[¿Cómo se conectan las entidades?]
        TiposCard[Tipos: 1:1, 1:N, N:N]
        DiagramacionCard[Cardinalidad en el diagrama ER]
    end

    Entidades --> Rombos --> Conectar --> Relacion
    Medico --> Consulta --> Paciente
    Consulta --> Variabilidad
    Relacion --> CardinalidadIntro --> TiposCard --> DiagramacionCard
```

---

### Clasificando las relaciones

---

### 📌 Definición de Cardinalidad

* **Cardinalidad**: Indica **cuántas instancias** de una entidad pueden estar asociadas a una instancia de otra entidad.
* Se representa gráficamente en un **diagrama entidad-relación (ER)**.

### 📌 Tipos de Cardinalidad

1. **1 a 1 (1:1)**: Una entidad A se relaciona con una sola entidad B y viceversa.
2. **0 a 1 (0:1)**: Una entidad A puede no tener relación o tener una única entidad B asociada.
3. **1 a muchos (1\:N)**: Una entidad A puede relacionarse con muchas instancias de entidad B.
4. **0 a muchos (0\:N)**: Una entidad A puede no tener relación o relacionarse con muchas instancias de B.
5. **Muchos a muchos (M\:N)**: Varias instancias de A se relacionan con varias instancias de B.

---

## 🧪 Ejercicio / Ejemplos

### 🏢 Ejemplo: Empresa y departamentos

* **Entidad**: Empresa

  * Tiene un departamento (ej. Recursos Humanos).
  * Un **colaborador** puede estar a cargo (gerente) del departamento.
  * Si hay un solo colaborador encargado → **Cardinalidad 1:1**
  * Si hay varios colaboradores en un departamento → **Cardinalidad 1\:N**
  * Si hay múltiples departamentos y múltiples colaboradores, la relación se vuelve más compleja.

### 📚 Ejemplo: Club del Libro

* Entidades: **Pedido** y **Libro**

  * Un pedido puede tener varios libros.
  * Un libro puede estar en varios pedidos.
  * Relación de **muchos a muchos (M\:N)**.
  * Este tipo de relación se maneja con una **entidad intermedia** (no detallada aún).

---

## 📊 Esquema tipo cardinalidades

```mermaid
flowchart TD

    subgraph Definicion
        A1[¿Qué es Cardinalidad?]
        A2[Indica cómo se relacionan las entidades]
        A3[Se representa en Diagramas ER]
    end

    subgraph TiposCardinalidad
        B1[1:1 - Uno a Uno]
        B2[0:1 - Cero a Uno]
        B3[1:N - Uno a Muchos]
        B4[0:N - Cero a Muchos]
        B5[M:N - Muchos a Muchos]
    end

    subgraph EjemploEmpresa
        C1[Empresa con Departamento]
        C2[Departamento con 1 Colaborador (Gerente)]
        C3[Cardinalidad 1:1]
        C4[Departamento con varios Colaboradores]
        C5[Cardinalidad 1:N]
        C6[Varios Departamentos y Colaboradores]
    end

    subgraph EjemploLibro
        D1[Club del Libro]
        D2[Pedido con varios Libros]
        D3[Libro en varios Pedidos]
        D4[Cardinalidad M:N]
        D5[Se maneja con Entidad Intermedia]
    end

    A1 --> A2 --> A3 --> TiposCardinalidad
    TiposCardinalidad --> C1
    C1 --> C2 --> C3
    C1 --> C4 --> C5
    C1 --> C6
    TiposCardinalidad --> D1
    D1 --> D2 --> D4
    D1 --> D3 --> D4
    D4 --> D5
```

---

### Representando las relaciones

---

## 🔍 CONCEPTOS CLAVE

**1. Cardinalidad**

* Se refiere a la cantidad mínima y máxima de ocurrencias entre entidades.
* Siempre se define como **mínima..máxima** (por ejemplo, 1..N).

**2. Ejemplo de Casa**

* Una casa debe tener al menos un propietario (1..N).
* Puede estar habitada o no: (0..N) habitantes.

**3. Relaciones y Reglas**

* Un **cliente** debe existir para que exista un **pedido** → cardinalidad: Cliente (1..1), Pedido (0..N).
* Un **pedido** debe contener al menos un **libro** → Pedido (1..N), Libro (1..N).
* Un **libro** pertenece a una única **editorial** → Libro (1..1), Editorial (1..N).
* Un **libro** debe existir en **inventario** para poder ser vendido → Libro (1..N), Inventario (0..N).

**4. Tipos de Relaciones**

* 1:1 (uno a uno)
* 1\:N (uno a muchos)
* N\:M (muchos a muchos) → requiere atención especial (posible tabla intermedia).

---

## 🧪 EJERCICIOS / EJEMPLOS PRÁCTICOS

**Ejemplo 1: Casa y Propietario**

* Casa:

  * Cardinalidad mínima: 1 (al menos un propietario).
  * Cardinalidad máxima: N (varios propietarios posibles).
* Habitantes:

  * Cardinalidad mínima: 0 (puede estar vacía).
  * Cardinalidad máxima: N (puede haber muchos habitantes).

**Ejemplo 2: Cliente y Pedido**

* Un cliente puede no hacer pedidos (mínimo 0).
* Un cliente puede hacer varios pedidos (máximo N).
* Pero un pedido no existe sin un cliente (mínimo 1, máximo 1 en pedido respecto a cliente).

**Ejemplo 3: Pedido y Libro**

* Pedido debe contener al menos un libro (1..N).
* Un libro puede estar en muchos pedidos (1..N).

**Ejemplo 4: Libro y Editorial**

* Un libro pertenece a una única editorial (1..1).
* Una editorial puede tener muchos libros (1..N).

**Ejemplo 5: Libro y Inventario**

* Un libro debe estar en inventario (1..N).
* El inventario puede estar vacío (0..N) — discutible pero posible.

---

## 📊 FLUJOGRAMA (FLOWCHART) EN FORMATO **MERMAID**

```mermaid
erDiagram
    CLIENTE ||--o{ PEDIDO : realiza
    PEDIDO }o--o{ LIBRO : contiene
    LIBRO }o--|| EDITORIAL : pertenece_a
    LIBRO ||--o{ INVENTARIO : existe_en

    CLIENTE {
        string id_cliente
        string nombre
    }

    PEDIDO {
        string id_pedido
        date fecha
    }

    LIBRO {
        string id_libro
        string titulo
    }

    EDITORIAL {
        string id_editorial
        string nombre
    }

    INVENTARIO {
        string id_stock
        int cantidad
    }
```

---

### Para saber más: restricción de participación

De acuerdo con las referencias utilizadas para realizar tus estudios, puedes encontrar otra forma de representar la
cardinalidad mínima, conocida como restricción de participación o dependencia de existencia.

La restricción de participación es utilizada para especificar si la existencia de la entidad depende de la asociación a
otra entidad, o sea, depende de la relación. Existen dos tipos de restricción de participación: restricción total y restricción
parcial.

La restricción total ocurre cuando todas las instancias de una entidad X necesitan estar obligatoriamente relacionadas a
alguna instancia de la entidad Y. Por ejemplo: Si en las reglas de negocio del proyecto se estableció que todo(a) colaborador(a)
necesita estar asociado a un departamento para que la persona pueda trabajar en la empresa, consideramos que la restricción
de participación entre colaborador(a) y el departamento es total, pues, él/ella necesita estar trabajando en, como mínimo,
un departamento.

Ya la restricción parcial ocurre cuando todas las instancias de una entidad X no necesitan estar obligatoriamente relacionadas
a cualquier instancia de la entidad Y. Por ejemplo: Todo departamento necesita ser gestionado por un(a) colaborador(a),
pero no todo colaborador(a) necesita ser gerente de un departamento. Entonces, consideramos que la restricción de participación
entre la relación referente a la gestión de un departamento por parte de un(a) colaborador(a) es una restricción parcial,
ya que no todos los colaboradores van a gestionar un solo departamento.

### Entidades asociativas

### ✅ Análisis del texto

---

1. **Relación Muchos a Muchos (N\:M)**

   * Puede ser confusa y difícil de gestionar directamente.
   * Ejemplo: Muchos pedidos pueden contener muchos libros.

2. **Entidad Asociativa (Associative Entity)**

   * Se usa para descomponer relaciones muchos a muchos.
   * Se representa como una nueva entidad en el modelo.
   * Permite organizar la relación en una estructura más clara.
   * En este caso, la entidad asociativa se llama `Items`.

3. **Abstracción en modelado**

   * La necesidad de crear una entidad asociativa nace de observar el problema.
   * Facilita la organización y eficiencia en el diseño.

4. **Cardinalidad en la entidad asociativa**

   * **Pedido → Items**: 1 a N
   * **Libro → Items**: 1 a N
   * Para que exista un ítem, debe estar asociado como mínimo a un pedido y un libro.

---

## 🧪 Ejercicio explicado en el video

1. Se parte de una **relación muchos a muchos** entre las entidades `Pedidos` y `Libros`.
2. Se decide **crear una entidad asociativa** para manejar mejor esta relación.
3. Se elimina la relación directa y se crea una nueva entidad llamada **Items**.
4. Se establece que **Items** contiene la relación con ambos:

   * Muchos pedidos pueden estar en Items.
   * Muchos libros pueden estar en Items.
5. Se ajustan gráficamente las relaciones y cardinalidades:

   * **Pedidos (1\:N) Items**
   * **Libros (1\:N) Items**
6. Se menciona que esto mejora la comprensión y organización del modelo.
7. Se concluye que el modelo ya está estructurado, solo faltan los atributos internos de cada entidad.

---

## 📊 Esquema tienda del libro

```mermaid
erDiagram
    PEDIDOS ||--o{ ITEMS : contiene
    LIBROS  ||--o{ ITEMS : incluye

    PEDIDOS {
        int id_pedido
        ...
    }

    LIBROS {
        int id_libro
        ...
    }

    ITEMS {
        int id_item
        int id_pedido
        int id_libro
        ...
    }
```

## Atributos

### Qué son los atributos

---

1. **Entidad Inventario**

   * Solo existe un inventario en el sistema (Cardinalidad máxima = 1).
   * Puede haber 0 libros en inventario (Cardinalidad mínima = 0).

2. **Cardinalidad**

   * Define la cantidad mínima y máxima de elementos que pueden participar en una relación.
   * En este caso, para Inventario, máximo 1 inventario.

3. **Definición de atributos**

   * Atributos son características que describen a una entidad.
   * Sin atributos, una entidad no existe.

4. **Ejemplos de atributos para entidades**

   * **Clientes**:

     * Tipo: Persona Natural o Persona Jurídica.
     * Persona Natural: RUT, DNI.
     * Persona Jurídica: NIT, RUES.
     * Otros: Nombre, Dirección, Teléfono, Email.
   * **Libros**:

     * Título, Categoría, ISBN, Año de publicación, Valor, Casa editorial, Autor.
   * **Editorial**:

     * Teléfonos (máximo 2), Nombre de contacto, Email.

5. **Relación cliente-libro**

   * Un cliente puede comprar uno o más libros.
   * Se verifica disponibilidad en inventario antes de la compra.

6. **Diagramación de atributos**

   * En el modelo entidad-relación, los atributos se representan con óvalos.
   * Se pueden asignar múltiples atributos a una entidad (aunque se profundizará luego).

---

## 🧪 Ejercicio explicado

1. Se revisa la entidad **Inventario** y se define su cardinalidad (máximo 1 inventario).
2. Se explica la importancia de los atributos para definir las entidades.
3. Se analizan atributos a partir de un documento real (entrevista a directivos):

   * Se clasifican atributos según si el cliente es persona natural o jurídica.
4. Se listan atributos clave para las entidades `Clientes`, `Libros` y `Editoriales`.
5. Se establece la relación de compra entre clientes y libros con la condición de verificar inventario.
6. Se muestra cómo agregar atributos en un diagrama entidad-relación con la herramienta (óvalos).

---

## 📊 Esquema tipo *flowchart* (Mermaid)

```mermaid
erDiagram
    CLIENTES {
        string tipo_cliente "Natural / Jurídica"
        string RUT
        string DNI
        string NIT
        string RUES
        string nombre
        string direccion
        string telefono
        string email
    }

    LIBROS {
        string titulo
        string categoria
        string ISBN
        int anio_publicacion
        float valor
        string casa_editorial
        string autor
    }

    EDITORIAL {
        string nombre_contacto
        string telefono_1
        string telefono_2
        string email
    }

    INVENTARIO {
        int id_inventario
        -- Cardinalidad 1 inventario máximo
    }

    CLIENTES ||--o{ PEDIDOS : realiza
    PEDIDOS ||--o{ LIBROS : incluye
    INVENTARIO ||--o{ LIBROS : contiene

```

### Identificando los tipos de atributos

### 1. **Tipos de atributos**

* **Atributos atómicos:**

  * Poseen un solo valor indivisible.
  * Ejemplo: nombre, email (individual).
* **Atributos multivalor:**

  * Pueden tener varios valores para una sola entidad.
  * Ejemplo: teléfono 1 y teléfono 2 (máximo dos valores permitidos, no un solo campo multivalor).

### 2. **Ejemplo de atributos multivalor en la práctica**

* Editorial acepta máximo 2 números de teléfono, por lo tanto no se usa un solo campo multivalor sino dos atributos separados: teléfono 1 y teléfono 2.

### 3. **Manejo y organización de atributos**

* Se agregan atributos de forma individual y se conectan a la entidad.
* Ejemplo: para entidad Cliente se agregan: dirección, teléfono, email como atributos separados.

### 4. **Atributos derivados**

* Son atributos que se pueden descomponer o derivar en subcomponentes.
* Ejemplo: la dirección se puede descomponer en calle, barrio, ciudad, estado.
* Estos subatributos están relacionados y se agrupan para mejor organización visual.

### 5. **Atributos clave**

* Son atributos identificadores únicos de una entidad (se representan subrayados).
* Ejemplo: RUT, DNI para persona natural; NIT, RUES para persona jurídica.
* Se mencionan pero no se desarrollan en detalle en este texto (se verán en el próximo video).

---

## 🧪 Ejercicio descrito

1. Explicación sobre los tipos de atributos (atómicos vs multivalor).
2. Ejemplo práctico: Editorial con máximo 2 teléfonos (uso de teléfono 1 y teléfono 2).
3. Agregar atributos individuales a la entidad Cliente (dirección, teléfono, email).
4. Descomponer un atributo derivado (dirección) en subatributos: calle, barrio, ciudad, estado.
5. Organización visual de atributos relacionados para facilitar comprensión.
6. Introducción a los atributos clave, señalando que se abordarán en detalle posteriormente.

---

## 📊 Esquema tipo flowchart Mermaid

```mermaid
erDiagram
    CLIENTE {
        string nombre
        string direccion
        string telefono
        string email
    }

    DIRECCION {
        string calle
        string barrio
        string ciudad
        string estado
    }

    EDITORIAL {
        string telefono_1
        string telefono_2
    }

    %% Relaciones
    CLIENTE ||--|| DIRECCION : tiene
    CLIENTE ||--o{ TELEFONOS : puede tener multiples (aunque en este caso es teléfono único)
    EDITORIAL ||--o{ TELEFONOS : tiene max 2 teléfonos

    %% Notas
    %% Atributos atómicos: nombre, email
    %% Atributos multivalor: teléfono_1, teléfono_2
    %% Atributos derivados: dirección -> calle, barrio, ciudad, estado
```

---

### Para saber más: diferentes tipos de atributos

Los atributos describen las propiedades de las entidades. Por ejemplo, la entidad persona puede tener como atributos:

  Nombre, fecha de nacimiento, edad, dirección, etc.

Al igual que las entidades, también existen algunos tipos de atributo. Estos son:

  Atributo simple

    Es un tipo de atributo indivisible, o sea, es un atributo atómico. Un ejemplo de este tipo es el atributo DNI, pues
    este no puede ser dividido en partes menores para formar otros atributos.

  Atributo compuesto

    Puede ser dividido en partes menores que representan otros atributos, como por ejemplo dirección. Esta puede ser
    subdividida en atributos menores, como: ciudad, estado, calle, código postal, etc.

  Atributo multivalor

    Es aquel que puede tener uno o N (varios) valores asociados a él. Por ejemplo: El atributo teléfono de un cliente. Este
    puede tener uno o varios números de teléfono.

  Atributo derivado y almacenado

    Los atributos derivados dependen de otro atributo o incluso de otra entidad para existir, como, edad y fecha de
    nacimiento. Para descubrir la edad de una persona, necesitamos de su fecha de nacimiento. Entonces, consideramos el
    atributo edad como derivado del atributo fecha de nacimiento, que también se conoce como atributo almacenado.

  Atributo clave

    Es utilizado para identificar de forma única una entidad, o sea, los valores asociados a este atributo son distintos
    entre el conjunto de entidades. Como ejemplo, podemos utilizar el Código del Producto. Este es único y puede ser utilizado
    como atributo clave, dado que cada producto recibe un código en particular.

### Atributos en el modelo

1. **Atributo Clave (Clave Principal)**

   * Atributo que identifica unívocamente un registro en una entidad.
   * Previene la duplicación de registros (por ejemplo, evitar que un libro o un pedido se repita).

2. **Especialización (Herencia en el modelo ER)**

   * Se representa con un triángulo en el diagrama.
   * Permite dividir una entidad en subentidades específicas (ejemplo: persona natural y persona jurídica).
   * Cada subentidad tiene atributos específicos.

3. **Entidad Cliente con Especialización**

   * Persona Natural: atributos RUT y DNI.
   * Persona Jurídica: atributos NIT y RUES.

4. **Atributos en diferentes entidades**

   * **Pedido:** atributos `fecha` y `valor` (fecha del pedido y valor monetario).
   * **Inventario:** atributo `cantidad` (cantidad disponible del libro).
   * **Libro:** atributos `título`, `categoría`, `ISBN`, `año de publicación`, `valor`, `casa editorial`, `autor`.
   * **Editorial:** atributos `nombre`, `contacto`, `teléfono 1`, `teléfono 2`, `email`.

5. **Atributos derivados**

   * Ejemplo: teléfono 1 y teléfono 2 derivados del atributo teléfono.

6. **Organización del diagrama**

   * Mover, arrastrar, y agrupar atributos para mejorar la estética y comprensión del diagrama.
   * Uso de herramientas (como copiar/pegar, selección múltiple) para facilitar la edición.

---

## **Ejercicio descrito**

* Eliminar un atributo clave previamente asignado.
* Crear un atributo de especialización (triángulo) para diferenciar entre persona natural y persona jurídica en la entidad cliente.
* Añadir los atributos específicos para cada subentidad (PN y PJ).
* Añadir atributos relevantes a otras entidades: pedidos, inventario, libros, editorial.
* Gestionar atributos derivados (teléfonos múltiples).
* Organizar y acomodar los elementos del diagrama para facilitar la lectura y diseño.
* Prepararse para la introducción formal de atributos clave en el próximo video.

---

## **Esquema tipo flowchart / mindmap**

```
[Entidad Cliente]
    ├─ Especialización (Triángulo: Identificación)
    │     ├─ Persona Natural (PN)
    │     │     ├─ RUT
    │     │     └─ DNI
    │     └─ Persona Jurídica (PJ)
    │           ├─ NIT
    │           └─ RUES

[Entidad Pedido]
    ├─ Fecha
    └─ Valor

[Entidad Inventario]
    └─ Cantidad

[Entidad Libro]
    ├─ Título
    ├─ Categoría
    ├─ ISBN
    ├─ Año de publicación
    ├─ Valor
    ├─ Casa editorial
    └─ Autor

[Entidad Editorial]
    ├─ Nombre
    ├─ Contacto
    ├─ Teléfono (atributo derivado)
    │     ├─ Teléfono 1
    │     └─ Teléfono 2
    └─ Email

[Concepto Clave]
    └─ Evitar duplicación de registros (Libro, Pedido, etc.)

[Diagrama]
    ├─ Organizar atributos (arrastrar, seleccionar, agrupar)
    └─ Uso de herramientas para mejorar visualización (copiar/pegar, mover)

```

---

### Para saber más: clave foránea

Como estudiamos en las últimas aulas, la entidad débil acaba recibiendo la clave principal de la entidad fuerte con la
cual está asociada para componer la clave parcial.

Como sabemos, la entidad débil no posee la clave principal. Por este motivo, podemos tener atributos identificadores propios
de la entidad débil que van a componer esta clave parcial. Adicionalmente, tenemos la clave principal de la entidad fuerte,
que se desplaza hacia la entidad débil.

A esta clave que parte desde la entidad fuerte y llega a la entidad débil damos el nombre de clave foránea. Podríamos hacer
una analogía con la palabra foránea, ya que ella originalmente pertenece a otra entidad, y viaja hasta la entidad de destino.

### Representando atributos en el DER

---

## 1) Ejercicio

* Completar un diagrama entidad-relación (ER) para un sistema que maneja clientes, editoriales, libros, pedidos e inventarios.
* Resolver cómo evitar la duplicidad de registros (ejemplo: mismo libro repetido en inventario o pedidos duplicados).
* Definir claves principales (primary keys) para entidades fuertes (cliente, editorial).
* Crear un atributo adicional (código) para identificar unívocamente clientes y editoriales.
* Manejar entidades débiles (libro, pedido, inventario) usando claves parciales y relacionarlas con entidades fuertes.
* Asociar códigos (claves foráneas) para relacionar clientes con pedidos, editoriales con libros, libros con inventarios.
* Establecer claves parciales para entidades débiles (ejemplo: número de pedido, código de libro).
* Crear una entidad asociativa llamada “items” que relaciona pedido y libro, incluyendo atributos cantidad y valor.
* Organizar y mostrar el modelo final con los objetos y relaciones correctamente distribuidos.

---

## 2) Conceptos Relevantes

* **Base de datos relacional:** Se basa en tablas y relaciones entre ellas, que aseguran la integridad de los datos.
* **Integridad de datos:** Evitar duplicidades o inconsistencias mediante reglas y restricciones.
* **Clave principal (Primary Key):**

  * Atributo único que identifica un registro de forma irrepetible dentro de una entidad.
  * No puede ser nulo.
  * Solo entidades fuertes poseen clave principal.
* **Entidad fuerte:** Entidad que tiene su propia clave principal (ej. Cliente, Editorial).
* **Entidad débil:** Entidad que no tiene clave principal propia, depende de una entidad fuerte y usa claves parciales (ej. Libro, Pedido, Inventario).
* **Clave parcial:** Atributo que, junto con la clave principal de la entidad fuerte, identifica un registro de entidad débil.
* **Clave foránea (Foreign Key):** Atributo que relaciona una entidad con otra, copiando la clave principal para mantener la relación.
* **Atributos adicionales:** Para evitar duplicidades, se crean atributos como "código cliente" o "código editorial" asignados en el registro.
* **Entidad asociativa:** Tabla que representa la relación muchos a muchos entre entidades, por ejemplo, "items" para relacionar pedidos con libros.
* **Restricciones de clave:** No puede haber dos registros con la misma combinación de claves principales y parciales.
* **Relaciones entre entidades:**

  * Cliente realiza pedidos (pedido tiene código cliente).
  * Editorial tiene libros (libro tiene código editorial).
  * Inventario depende de libro y editorial (inventario tiene código libro y editorial).
  * Pedido está asociado a ítems (que relacionan pedido y libro con cantidad y valor).

---

## 3) Esquema flowchart / mindmap (conceptual)

```mermaid
flowchart TD
    A[Base de Datos Relacional]
    A --> B[Integridad de Datos]
    B --> C[Claves Principales (Primary Keys)]
    B --> D[Restricciones (No duplicados, No nulos)]

    A --> E[Entidades Fuertes]
    E --> E1[Cliente]
    E --> E2[Editorial]

    E1 --> F1[Código Cliente (Primary Key)]
    E2 --> F2[Código Editorial (Primary Key)]

    A --> G[Entidades Débiles]
    G --> G1[Libro]
    G --> G2[Pedido]
    G --> G3[Inventario]

    G1 --> H1[Clave Parcial: Código Libro]
    G2 --> H2[Clave Parcial: Código Pedido]

    E1 -->|Relación| G2
    G2 -->|Incluye| I[Items (Entidad Asociativa)]
    G1 -->|Relacionado con| I
    G2 --> I
    I --> J[Atributos: Cantidad, Valor]

    E2 -->|Relación| G1
    E2 -->|Relación| G3
    G1 -->|Relación| G3

    subgraph Relaciones
        E1 --> G2
        E2 --> G1
        G1 --> G3
        G2 --> I
        G1 --> I
    end
```

---

### Colocando la clave principal

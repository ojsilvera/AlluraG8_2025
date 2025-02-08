# Introduccion a html

Consulta de Documentación

Antes de escribir código, es recomendable consultar documentación. Se sugiere usar W3Schools para aprender HTML.

    HTML: es realmente un Lenguaje de Marcado y no un lenguaje de programacion propiamente dicho

HTML es un lenguaje de marcado, no de programación. Se usa para estructurar el contenido de una página web.

## Estructura Básica de un Documento HTML

DOCTYPE: Define que el archivo es HTML5.

HTML: Es la etiqueta raíz del documento.
Tiene una etiqueta de apertura <html> y una de cierre </html>. Se debe usar sangría (TAB) para mejorar la legibilidad.

Sección Head Contiene información para el navegador. Se usa la etiqueta <head>. Dentro de <head> se coloca <title>, que
define el título de la página.

`
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <title>Document</title>
        </head>
        <body>
        </body>
    </html>
`

### **Resumen: Creación del Cuerpo de un Proyecto en HTML**

1. **Estructura Básica en HTML**
   - Se usa la etiqueta `<body>` para el contenido principal del proyecto.
   - Se agrega un título, un párrafo y una imagen en HTML.

2. **Diferencia entre `<title>` y `<h1>`**
   - `<title>` define el nombre de la pestaña en el navegador.
   - `<h1>` se usa para el título principal dentro del contenido y debe utilizarse solo una vez por página.
   - Para subtítulos, se emplean `<h2>`, `<h3>`, etc.

3. **Creación del Contenido**
   - Se agrega un título con `<h1>Esto es un título</h1>`.
   - Se incluye un párrafo con `<p>Esto es un párrafo</p>`.

4. **Inserción de una Imagen**
   - Se usa la etiqueta `<img>` sin etiqueta de cierre.
   - Se añade el atributo `src="html5.png"` para indicar la ruta de la imagen.
   - Para visualizar los cambios en el navegador, es necesario guardar el archivo antes de actualizar la página.

5. **Accesibilidad**
   - Se agrega el atributo `alt="Logo de HTML5"` a la imagen para permitir que lectores de pantalla describan la imagen
   - a personas con discapacidad visual.

6. **Revisión Final**
   - Se habilita la función *autosave* en VSCode para evitar olvidar guardar los cambios.
   - Se prueba el resultado en el navegador para confirmar que todo funciona correctamente.

## live servers, quirck mode y etiqueta DOCTYPE

### **1. Prueba con la etiqueta Doctype**

- Se eliminó la etiqueta `Doctype` para observar cambios en el código.
- Inicialmente, la página no muestra cambios visibles.
- Al inspeccionar con **Google DevTools**, en la pestaña "Problemas", se detecta un error relacionado con **QuirksMode**.

### **2. ¿Qué es QuirksMode?**

- **QuirksMode** es un modo de compatibilidad heredado de versiones anteriores de HTML.
- Antes de HTML5, los desarrolladores debían indicar la compatibilidad con navegadores como **Internet Explorer** y **Netscape**.
- El uso de `Doctype` evita que el navegador active **QuirksMode**, asegurando una mejor visualización en todos los navegadores modernos.

### **3. Importancia de la curiosidad en el desarrollo**

- Ser curioso ayuda a entender el funcionamiento del código y herramientas como **Google DevTools**.

### **4. Uso de Live Server para facilitar el desarrollo**

- **Problema:** Cada cambio en el HTML requiere actualizar manualmente la página en el navegador.
- **Solución:** Instalar la extensión **Live Server** en **VSCode**.
  - Se busca en la pestaña de **Extensiones** y se instala.
  - Al activarlo con "Go Live", los cambios en HTML se reflejan automáticamente sin necesidad de recargar la página.

### **5. Próximos pasos**

- Se concluyen las pruebas y se inicia el desarrollo del **proyecto del curso**: un **portafolio web**.

## tag semanticos

### **Resumen del Proceso de Desarrollo de un Proyecto**

1. **Diseño Inicial**
   - Un diseñador UX/UI define los colores, imágenes, fuentes y otros aspectos visuales del proyecto.
   - Luego, el diseño es entregado al equipo de desarrollo.

2. **Uso de Software de Diseño**
   - Se emplea software como **Figma** para compartir y visualizar los diseños.
   - En este proyecto específico, se utilizará **Figma**, cuyo enlace está disponible en la sección de preparación del ambiente.
   - Para acceder, es necesario iniciar sesión con un correo electrónico.

3. **Interpretación del Diseño en Figma**
   - Figma permite obtener detalles clave del diseño:
     - **Tamaño y tipo de fuente** (ejemplo: Chroma One, tamaño 36).
     - **Colores de los elementos** (representados en códigos hexadecimales).
     - **Distancias entre componentes** (botones, textos, etc.).
   - Funciona como una guía para desarrollar el proyecto con precisión.

## etiquetas header, main y footer

### **1. Creación del Proyecto**

- Se crea una nueva carpeta llamada **Portafolio**.
- Se abre la carpeta en **VSCode** mediante *File > Open Folder*.
- Se genera un archivo **index.html** para comenzar el desarrollo.

### **2. Generación del código base en HTML**

- Para facilitar la creación del código inicial, se usa el signo de **exclamación (!) + Enter** en **VSCode**, lo que
- genera automáticamente la estructura básica del documento HTML.
- Se observa la presencia de nuevas etiquetas y atributos en el código generado.

### **3. Explicación de Etiquetas Importantes**

- **`lang="en"`**: Define el idioma del documento. Se cambia a **"es-MX"** para español de México.
- **`meta charset="UTF-8"`**: Permite el uso de caracteres especiales y evita errores en la visualización del texto.
- **`meta name="viewport"`**: Controla la adaptabilidad del sitio en diferentes dispositivos.
  - `width=device-width`: Ajusta el ancho de la página según el dispositivo.
  - `initial-scale=1.0`: Evita el zoom inicial en la pantalla.

### **4. Organización del Proyecto HTML**

- Se cambia el título del documento a **Portafolio**.
- Se identifican las tres secciones principales del HTML:
  1. **`header`**: Contiene la parte superior del sitio.
  2. **`main`**: Área principal del contenido.
  3. **`footer`**: Sección inferior del sitio.
- Se escriben estas etiquetas en el código para estructurar la página.

### **5. Próximos Pasos**

- Se revisará el diseño en **Figma**.
- Se agregarán los contenidos en la sección **main** en el siguiente paso del desarrollo.

## Agregando elementos al main

### **1. Selección y Copiado de Elementos desde Figma**

- Se selecciona el título (H1) en Figma y se copia con **CTRL-C**.
- En **VSCode**, se pega dentro de una etiqueta **H1** con **CTRL-V**.
- Se agrega la etiqueta **strong** para resaltar parte del texto.

### **2. Visualización en el Navegador**

- Se usa **Live Server** para visualizar los cambios.
- La etiqueta **strong** no altera la apariencia del texto, pero informa al navegador sobre la importancia de esa parte.

### **3. Creación de un Párrafo**

- Se copia el texto "Hola, soy Ana García" y se pega dentro de una etiqueta **P** en **VSCode**.
- Se organiza el código para mejorar su legibilidad.

### **4. Creación de Enlaces (No Botones)**

- Se identifican los enlaces a **Instagram** y **GitHub**.
- Se usa la etiqueta **A** en lugar de **button**, ya que no envían información, solo redirigen.
- Se agregan las URLs en el atributo **href** para hacer los enlaces funcionales.

### **5. Inserción de una Imagen**

- Se exporta la imagen desde Figma y se descarga.
- Se arrastra la imagen al proyecto en **VSCode**.
- Se usa la etiqueta **img** con los atributos:
  - **src**: para la ruta del archivo.
  - **alt**: "Imagen de Ana García trabajando" para accesibilidad.

### **6. Próximos Pasos**

- El **HTML está completo**, pero el diseño aún no coincide con el de **Figma**, se aplicará **CSS** para estilizar la página.

## **CSS y su importancia**

### **1. Uso de CSS en proyectos HTML**

- CSS permite que los proyectos HTML se vean más organizados y atractivos, siguiendo diseños como los creados en Figma.
- Para aprender CSS, es recomendable consultar documentación oficial, como la de *W3 Schools*.

### **2. Definición y aplicación básica de CSS**

- CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo en cascada.
- Se escribe en un archivo separado del HTML.
- Se pueden aplicar estilos mediante selectores, por ejemplo:
  - Para cambiar el color de fondo del `body`, se usa `{ background-color: blue; }`.
  - Se pueden probar cambios en tiempo real en entornos interactivos como *W3 Schools*.

### **3. Historia y evolución de CSS**

- Antes del CSS, la estilización se hacía dentro del HTML (hasta la versión 3.2).
- Los sitios web de los años 2000 eran poco atractivos y similares entre sí.
- Para mejorar la personalización y evitar sobrecargar el HTML, se creó CSS, separando la estructura (HTML) del estilo (CSS).
- CSS permitió que los sitios web tuvieran identidades visuales únicas con distintos colores y estilos.

En el próximo paso, se profundizará en la aplicación práctica de CSS.

## **Resumen: Creación y Vinculación de un Archivo CSS en VS Code**

1. **Creación del archivo CSS**
   - En **VS Code**, se crea un nuevo archivo llamado `style.css`.
   - Se utiliza este archivo para escribir los estilos de la página.

2. **Cambio del fondo en CSS**
   - Se revisa **Figma** para determinar el primer cambio.
   - Se establece el fondo negro en la etiqueta `<body>` utilizando la propiedad `background-color: black;`.
   - Al verificar en el navegador, el cambio no se refleja.

3. **Vinculación del CSS al HTML**
   - Se identifica que el archivo HTML no reconoce el CSS.
   - Se agrega la etiqueta `<link>` en `<head>`, con `rel="stylesheet"` y `href="style.css"`.
   - Ahora el CSS se aplica correctamente.

4. **Cambio del color de texto**
   - Se observa que el texto desapareció porque es negro sobre fondo negro.
   - Se agrega `color: white;` en `<body>` para hacer visible el contenido.

5. **Próximos pasos**
   - Se confirma que los cambios funcionan.
   - Se continuará con más estilización en el siguiente video.

En resumen:

para vincular el css en el html, utilizamos la etiqueta link, con las propiedades, rel y hrf, esto se agrega en la seccion del
head de la pagina.

``<link rel="stylesheet" href="./style.css">``

para cambviar las cararcteristicas de estilo, se llama a la clase, etiqueta o id del elemento html, seguido de una llaves
que delimitan el lugar donde se escribiran las propiedades y los valores que asumiran tras el cambio.

``
clase, etiqueta o id {
Aquí irian las propiedades y sus valores a cambiar terminando en ;
}
``

## **Colores en CSS y Figma**

### **1. Observación de colores en Figma**

- Se analizan los colores utilizados en Figma.
- Se encuentran valores como `F6F6F6` (blanco) y `000000` (negro).
- Se plantea la pregunta sobre cómo se representan los colores en CSS.

### **2. Diferentes formas de definir colores en CSS**

- **Por nombre:** Se pueden usar nombres predefinidos como “red” o “blue”.
- **RGB (Red, Green, Blue):** Se define el color con tres valores (0-255).
  - Ejemplo: `rgb(255, 0, 0)` representa el rojo más fuerte.
  - Modificar valores cambia el color resultante.
- **Hexadecimal:** Se usa un código de seis caracteres precedido por `#`.
  - Los primeros dos representan rojo, los dos siguientes verde, y los últimos azul.
  - Valores de `00` a `FF`, donde `FF` es el máximo de color.
  - Ejemplo: `#000000` (negro, ausencia de color), `#F6F6F6` (blanco).

### **3. Aplicación en VS Code**

- Se decide utilizar la notación hexadecimal en CSS para mantener consistencia con Figma.
- Se implementan los valores `#000000` (negro) y `#F6F6F6` (blanco) en CSS.
- Se verifica que los cambios se reflejan correctamente en el navegador.

### **Conclusión**

- Se exploran las formas de definir colores en CSS.
- Se adopta la notación hexadecimal por su uso en Figma.
- Se comprueba la correcta aplicación de colores en el código.

## Links de referencia

[Tag references](https://developer.mozilla.org/es/docs/Web/HTML/Element)

[HTML, CSS y JavaScript - Las diferencias](https://www.aluracursos.com/blog/html-css-javascript-cuales-son-las-diferencias)

[Introducción a las etiquetas HTML](https://www.w3schools.com/tags/)

[Tutorial de HTML Básico](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics)

[Estructura básica de una página HTML](https://htmldog.com/guides/html/beginner/)

[Tutorial de accesibilidad en la web](https://webaim.org/intro/)

[Modo Quirks y estándares en navegadores](https://developer.mozilla.org/es/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

[Uso de extensiones en Visual Studio Code - Visual Studio Code Docs](https://code.visualstudio.com/docs/editor/extension-marketplace)

[Extensión Live Server para Visual Studio Code - GitHub](https://github.com/ritwickdey/vscode-live-server)

[UX/UI Design: Fundamentos para la calidad en la interfaz de usuario - Interaction Design Foundation](https://www.interaction-design.org/literature/topics/ux-design)

[Consejos de CSS](https://css-tricks.com/guides/)

[Guía de estructuración de páginas HTML con semántica](https://developer.mozilla.org/es/docs/Web/HTML/Element)

[Utilizando Emmet para acelerar el desarrollo HTML - CSS-Tricks](https://css-tricks.com/emmet/)

[Introducción a HTML5 y etiquetas semánticas - HTML.com](https://html.com/html5/)

[Uso efectivo de las etiquetas de anclaje en HTML - W3Schools](https://www.w3schools.com/html/html_links.asp)

[Cómo insertar imágenes en HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element/img)

[Prácticas recomendadas para el diseño responsivo - Smashing Magazine](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

[Introducción a CSS - W3Schools](https://www.w3schools.com/css/)

[Cómo utilizar hojas de estilo en cascada (CSS) - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)

[Guía de colores y fuentes en CSS - Adobe Color](https://color.adobe.com/es/create/color-wheel)

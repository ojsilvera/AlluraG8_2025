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
   - Se agrega el atributo `alt="Logo de HTML5"` a la imagen para permitir que lectores de pantalla describan la imagen a personas con discapacidad visual.

6. **Revisión Final**
   - Se habilita la función *autosave* en VSCode para evitar olvidar guardar los cambios.
   - Se prueba el resultado en el navegador para confirmar que todo funciona correctamente.

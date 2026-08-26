1. Averiguar como se documenta codigo explicando:iferencias Back-end y fronT-end 


* Foco: Cómo funciona el sistema por dentro.
* Qué se documenta: Rutas de API (endpoints), bases de datos, lógica de negocio y seguridad.
* Destinatarios: Desarrolladores e integradores.
* Herramientas: Swagger/OpenAPI, Postman.

## Front-End (Interfaz y Usuario)

* Foco: Cómo se ve y actúa la aplicación.
* Qué se documenta: Componentes visuales, diseño (UI/UX), navegación y manejo del estado global.
* Destinatarios: Desarrolladores, maquetadores y diseñadores.
* Herramientas: Storybook, Markdown.

2. Averiguar como se documenta codigo para Javascript

El estándar para documentar en JavaScript es JSDoc. Consiste en escribir comentarios especiales directamente en el archivo de texto. El sistema detecta estos textos y puede generar manuales automáticamente.
## Reglas de escritura

* Apertura: Cada bloque de comentario debe empezar estrictamente con un asterisco doble: /**.
* Cierre: Se termina con un asterisco y una diagonal: */.
* Ubicación: El bloque se escribe siempre en la línea inmediatamente anterior a la función, variable o clase que se quiere explicar.

## Etiquetas de texto principales
Para ordenar la información, se usan palabras clave que empiezan con el símbolo arroba (@):

* Parámetros: Se usa @param. Entre llaves se escribe el tipo de datos (como number o string), luego el nombre de la variable y al final la descripción de su uso.
* Retornos: Se usa @returns. Indica qué tipo de información devuelve la función al terminar de ejecutarse.
* Tipos personalizados: Se usa @typedef para definir la estructura de un objeto complejo y @property para detallar cada una de sus partes internas.

3. Averiguar como se documenta codigo para React en especifico
La documentación en React se enfoca en explicar componentes, sus propiedades (Props), sus estados y sus hooks.
 1. Documentación de Props (TypeScript o PropTypes)
Es lo más importante. Define qué datos recibe el componente para funcionar.

* Moderno (TypeScript): Se escribe un bloque de texto plano antes de la interfaz (interface) o tipo (type) que define las propiedades.
* Tradicional (PropTypes): Se añade una propiedad al componente donde se valida el tipo de dato de cada parámetro.

 2. Comentarios del Componente (JSDoc)
Se coloca un bloque de texto informativo (/** ... */) justo encima de la función del componente. Allí se explica brevemente qué interfaz visual genera y qué acciones realiza.
 3. Documentación de Custom Hooks
Para funciones que manejan lógica interna de React, se documenta la función explicando qué parámetros del estado inicial recibe y qué variables o funciones devuelve en su arreglo o interfaz de salida.
## Herramientas Estándar

* Storybook: Herramientas visuales donde se renderizan los componentes aislados junto a su documentación de propiedades para que los diseñadores y desarrolladores los prueben en vivo.
* Styleguidist: Lee los comentarios del código de React y genera una página web interactiva automáticamente.








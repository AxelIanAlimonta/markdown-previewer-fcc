export const defaultText = `
# ¡Bienvenido a mi Previsualizador de Markdown en React!

## Esto es un subencabezado...

### Y aquí hay algunas cosas interesantes:

Aquí hay algo de código, \`<div></div>\`, entre 2 acentos graves

\`\`\`
// Este es código de varias líneas:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

También puedes hacer que el texto sea **negrita**... ¡vaya!
O _cursiva_.
O... espera... **_¡ambas!_**
Y siéntete libre de volverte loco ~~tachando cosas~~.

También hay [enlaces](https://www.freecodecamp.org), y
> Citas en bloque!

Y si quieres volverte realmente loco, incluso tablas:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Tu contenido puede | estar aquí, y también | aquí....
Y aquí. | De acuerdo. | Creo que entendemos.

- Y, por supuesto, hay listas.
  - Algunas son con viñetas.
     - Con diferentes niveles de sangría.
        - Que se ven así.

1. Y también hay listas numeradas.
1. ¡Usa solo 1s si quieres!
1. Y por último, pero no menos importante, no olvidemos las imágenes incrustadas:

![Logo de freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
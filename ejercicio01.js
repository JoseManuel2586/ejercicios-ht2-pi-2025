import readline from 'readline-sync'

// 👉 Paso 1: Solicitar entrada de datos
// const nombre = ...
// const edadTexto = ...
// const activoTexto = ...

// 👉 Paso 2: Declarar y convertir datos
// const edad = ...
// const activo = ...

// 👉 Paso 3: Imprimir mensaje personalizado
// console.log(`...`)

// 👉 Paso 4: Imprimir tipos de datos usando typeof
// console.log(`Tipo de nombre: ...`)
// console.log(`Tipo de edad: ...`)
// console.log(`Tipo de activo: ...`)

// 👉 Paso 5: Declarar variables especiales y mostrar su tipo
// let valorNulo = ...
// let valorNoAsignado
// console.log(`Tipo de valorNulo: ...`)
// console.log(`Tipo de valorNoAsignado: ...`)


const nombre = readline.question('Ingresa tu nombre: ')
const edadTexto = readline.question('Ingresa tu Edad: ')
const activoTexto = readline.question('Ingresa si estas activo (true/false): ')

const edad = Number(edadTexto)
const activo = activoTexto.toLowerCase === 'true'

console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y estoy activa: ${activo}`)


console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof activo)

let valorNulo = null
let valorNoAsignado

console.log(valorNulo)
console.log(valorNoAsignado)



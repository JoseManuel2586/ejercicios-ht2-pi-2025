import readline from 'readline-sync'
import 'colors'


// Paso 1: Solicitar precio y descuento
// const precioTexto = ...
// const descuentoTexto = ...

// Paso 2: Convertir a número y calcular precio final
// const precio = ...
// const descuento = ...
// const total = ...

// Paso 3: Imprimir resultado del cálculo

// Paso 4: Solicitar estatura
// const estaturaTexto = ...
// const estatura = ...

// Paso 5: Verificar si puede subirse al juego

// Paso 6: Imprimir resultado de la evaluación

const precioTexto = readline.question('Ingrese el precio del Producto: ')
const descuentoTexto = readline.question('Ingrese porcentaje de descuento en numero: ')

const precio = Number(precioTexto)
const descuento = Number(descuentoTexto) / 100
const total = precio - (precio * descuento)

console.log(`El precio final con descuento es: ${total}`.yellow)
console.log(`=============================================================================`.gray)


const estaturaTexto = readline.question('Ingrese su estatura: ')

const estatura = Number(estaturaTexto) <= 120 ||  Number(estaturaTexto) >= 200


console.log(estatura ? 'NO puede ingresar'.red : 'SI puede ingresar'.green)
console.log(`=============================================================================`.gray)

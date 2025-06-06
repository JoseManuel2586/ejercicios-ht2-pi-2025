import readline from 'readline-sync'
import 'colors'
// Paso 1: Solicitar fecha de nacimiento
// const fechaNacimientoTexto = ...
// const fechaNacimiento = ...
// const anioNacimiento = ...
// const anioActual = ...
// const edad = ...

// Paso 2: Evaluar grupo etario
// if (...) {
//   ...
// } else if (...) {
//   ...
// } else if (...) {
//   ...
// } else {
//   ...
// }

// Paso 3: Solicitar nota del examen
// const notaTexto = ...
// const nota = ...

// Paso 4: Evaluar calificación con else if


const fechaNacimiento = readline.question('Ingresa tu fecha de nacimiento en formato YYYY-MM-DD: '.yellow)
const anioNacimiento = Number(fechaNacimiento.slice(0,4))
const anioActualOBjeto = new Date()
const anioActual = anioActualOBjeto.getFullYear()
const edad = anioActual - anioNacimiento

if(edad < 12){
    console.log('"Eres un niño"'.blue)
}else if(edad >= 12 && edad <= 17){
    console.log('"Eres un adolescente"'.gray)
}else if(edad >= 18 && edad <= 64){
    console.log('"Eres un adulto"'.green)
}else {
    console.log('"Eres un adulto mayor"'.red)
}
console.log('============================================================================================'.gray)

const notaTexto = readline.question('Ingrese la nota de su examen: '.yellow)
const nota = Number(notaTexto)

if(nota >= 90){
    console.log('Calificación "A"'.green)
}else if(nota >= 80 && nota <= 89){
    console.log('Calificación "B"'.blue)
}else if(nota >= 70 && nota <= 79){
    console.log('Calificación "C"'.gray)
}else if(nota >= 60 && nota <= 69){
    console.log('Calificación "D"'.yellow)
} else{
    console.log('Calificación "F"'.red)
}

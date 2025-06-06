import readline from 'readline-sync'
import 'colors'
// Paso 1: Solicitar número de día
// const numeroDiaTexto = ...
// const numeroDia = ...

// Paso 2: switch para días de la semana
// switch (numeroDia) {
//     case 1:
//         ...
//         break
//     ...
//     default:
//         ...
// }

// Paso 3: Solicitar color del semáforo
// const color = ...

// Paso 4: switch para interpretar semáforo
// switch (color) {
//     case 'verde':
//         ...
//         break
//     ...
//     default:
//         ...
// }


const numeroDiaTexto = readline.question('Ingresar un numero del 1 al 7 dependiendo del dia que quieras: '.yellow)
const numeroDia = parseInt(numeroDiaTexto)

switch(numeroDia){
    case 1 :
        console.log('Lunes')
    break
    case 2 :
        console.log('Martes')
    break
    case 3 :
        console.log('Miercoles')
    break
    case 4 :
        console.log('Jueves')
    break
    case 5 :
        console.log('Viernes')
    break
    case 6 :
        console.log('Sabado')
    break
    case 7 :
        console.log('Domingo')
    break
    default :
        console.log('El numero ingresado es incorrecto')
    break
}

console.log('============================================================================================'.gray)

const colorSemaforo = readline.question('Ingrese un color de semaforo (verde, amarillo, rojo): '.yellow)
const colorSemaforoMinus = colorSemaforo.toLowerCase()

switch(colorSemaforoMinus){
    case 'verde' :
        console.log('Puede avanzar'.green)
    break
    case 'amarillo' :
        console.log('Pase con precaucion'.yellow)
    break
    case 'rojo' :
        console.log('Detengase'.red)
    break
    default :
        console.log('Color no valido'.blue)
    break
}
import readline from 'readline-sync'
import 'colors'



const base = Number(readline.question('Ingrese la base del Triangulo: '.yellow))
const altura = Number(readline.question('Ingrese la altura del Triangulo: '.yellow))
const nombre = readline.question('Ingrese su nombre: '.yellow)


function calcularAreaTrinagulo(base, altura){
    let area = (base * altura) / 2
    return area
}

console.log(`El area del triangulo es: ${calcularAreaTrinagulo(base, altura)}`.green)

function mostrarSaludo(nombre){
    console.log(`"Hola, ${nombre}. Bienvenido al sistema de geometría"`.blue)
}


mostrarSaludo(nombre)
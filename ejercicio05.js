import readline from 'readline-sync'
import 'colors'


const segundosTemporizar = Number(readline.question('Ingrese los segundos desea temporizar: '.yellow))
let limite = 0

while(limite < segundosTemporizar){
    console.log('Faltan ' + (segundosTemporizar - limite) + ' segundos')
    limite ++
}
console.log('El tiempo finalizo')



console.log('==========================================================================='.gray)



let menu = ''
do{
    menu = readline.question(`
    Bienvenido al Menu de Opciones

    1. Saludar
    2. Mostrar hora actual
    3. Salir

    Ingrese su opcion: `.yellow)
console.clear()
switch(menu){
    case '1' :
        const nombre = readline.question('Ingresa tu nombre: '.yellow)
        console.log(`Hola ${nombre}, bienvenido al curso de programacion I`.blue)
    break
    case '2' :
        const fechaDeHoy = new Date()
        const horaActual = fechaDeHoy.getHours()
        const minutosActual = fechaDeHoy.getMinutes()
        console.log(`La hora actual es: ${horaActual}:${minutosActual}`)
    break
    case '3' :
        console.log('Gracias por utlizar nuestros servicios'.blue)
    break
    default :
        console.log('La opcion seleccionada es incorrecta'.red)
    break
}

}while(menu !== '3')
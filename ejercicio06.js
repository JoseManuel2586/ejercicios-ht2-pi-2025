import 'colors'


const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
 

for(let i = 0; i < estudiantes.length; i++){
    let index = estudiantes[i].length
    let letraNombre = estudiantes[i][index - 1]
    let revision = letraNombre === 'a'    
    console.log(revision ? 'Bienvenida, '.yellow + estudiantes[i]: 'Bienvenido, '.blue + estudiantes[i])
}



const notas = [70, 85, 55, 90, 60]

let promedio = 0
for(let i = 0; i < notas.length; i++){
    promedio += notas[i]
}

console.log(`"El promedio del grupo es: ${promedio/notas.length}"`.green)

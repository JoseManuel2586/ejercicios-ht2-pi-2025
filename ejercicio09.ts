// Paso 1: Declarar interfaz Usuario
// interface Usuario {
//     ...
// }

// Paso 2: Declarar interfaz InformacionLogIn
// interface InformacionLogIn {
//     ...
// }

// Paso 3: Crear variable de tipo Usuario

// Paso 4: Implementar función loguear
// function loguear(info: InformacionLogIn): void {
//     if (...) {
//         console.log('Acceso permitido')
//     } else {
//         console.log('Datos inválidos')
//     }
// }

// Paso 5: Llamar función con datos de prueba
// const datosLogin: InformacionLogIn = {
//     correo: 'correo@example.com',
//     clave: '123456',
//     recaptcha: true
// }
// loguear(datosLogin)


interface Usuario{
    nombre: string,
    edad: number,
    activo: boolean,
    correo?: string
}

interface InformacionLogin{
    correo: string,
    clave: string,
    recaptcha: boolean
}


let usuarioActual: Usuario = {
    nombre: 'Jose Manuel Lopez',
    edad: 38,
    activo: true,
    correo: 'jose_lopez2586@hotmail.com'
}


function loguear(usuario: InformacionLogin): void{
    let arroba = usuario.correo.indexOf('@') >= 0
    let punto = usuario.correo.indexOf('.') >= 0
    let long = usuario.clave.length >= 6
    let recap = usuario.recaptcha === true
    if(arroba && punto && long && recap){
        console.log('Acceso permitido')
    }else{
        console.log('Datos Invalidos')
    }
}


const datosLogin: InformacionLogin = {
    correo: 'jose_lopez2586@hotmail.com',
    clave: 'Manuel2507',
    recaptcha: true
}


loguear(datosLogin)
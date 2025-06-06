
enum Prioridad{
    ALTA = '🔴',
    MEDIA = '🟡',
    BAJA = '🔵'
}

enum EstadoTarea{
    PENDIENTE = 'Pendiente', 
    EN_POGRESO = 'En Progreso',
    FINALIZADA = 'Finalizada'
}


interface Tarea{
    id: number,
    titulo: string,
    completada: boolean,
    prioridad: Prioridad,
    estado: EstadoTarea
}


class GestorTareas{
    tareas: Tarea[]
    constructor(){
        this.tareas = []
    }

    agregarTarea(titulo: string, prioridad: Prioridad): void{
        const nuevaTarea: Tarea = {
            id: Date.now(),
            titulo: titulo,
            completada: false,
            prioridad: prioridad,
            estado: EstadoTarea.PENDIENTE
        }
        this.tareas.push(nuevaTarea)
        console.log(`La tarea ${nuevaTarea.titulo} fue agregada con exito`)
    }

    listarTareas(): void{
        if(this.tareas.length > 0){
            this.tareas.forEach((elemento) =>{
                console.log('[' + elemento.prioridad + '] ' + elemento.titulo + ' - Estado: ' + elemento.estado)
            })
        }else{
            console.log('No hay registros de Tareas')
        }
    }
}

const registroTareas = new GestorTareas()
registroTareas.agregarTarea('Estudiar para el examen final Programacion', Prioridad.ALTA)
registroTareas.agregarTarea('Estudiar para el examen final Matematica', Prioridad.ALTA)
registroTareas.agregarTarea('Estudiar para el examen final Fisica', Prioridad.ALTA)

registroTareas.listarTareas()
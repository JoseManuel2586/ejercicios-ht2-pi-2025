import { cargarDB, guardarCambiosDB, hacerBackupDB } from './db';
import { registrarLog } from './logger';

export function listar(nombreTabla: string): any[] {
    const db = cargarDB();
    return db[nombreTabla] || [];
}

export function insertar(nombreTabla: string, campoId: string, data: any): void {
    const db = cargarDB();
    if (!db[nombreTabla]) {
        db[nombreTabla] = [];
    }

    const nuevoId = db[nombreTabla].length > 0
        ? db[nombreTabla][db[nombreTabla].length - 1][campoId] + 1
        : 1;

    const nuevoRegistro = { ...data, [campoId]: nuevoId };
    db[nombreTabla].push(nuevoRegistro);

    guardarCambiosDB(db);
    registrarLog(`INSERT en '${nombreTabla}': ${JSON.stringify(nuevoRegistro)}`);
}

export function eliminar(nombreTabla: string, campoId: string, valor: any): void {
    const db = cargarDB();
    if (!db[nombreTabla]) {
        console.error(`Tabla '${nombreTabla}' no existe.`);
        return;
    }

    const registrosAntes = db[nombreTabla].length;
    db[nombreTabla] = db[nombreTabla].filter((registro: any) => registro[campoId] !== valor);
    const registrosDespues = db[nombreTabla].length;

    guardarCambiosDB(db);

    if (registrosAntes !== registrosDespues) {
        registrarLog(`DELETE en '${nombreTabla}' con ${campoId} = ${valor}`);
    } else {
        registrarLog(`DELETE fallido en '${nombreTabla}': no encontrado ${campoId} = ${valor}`);
    }
}

export function crearBackUp(): void {
    hacerBackupDB();
    registrarLog(`Backup de la base de datos realizado.`);
}

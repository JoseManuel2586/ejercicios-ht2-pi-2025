import * as fs from 'fs';
import * as path from 'path';

const DB_PATH = path.join(__dirname, 'db.json');
const BACKUPS_DIR = path.join(__dirname, 'backups');

export function cargarDB(): any {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ clientes: [] }, null, 2));
    }
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
}

export function guardarCambiosDB(data: any): void {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export function hacerBackupDB(): void {
    if (!fs.existsSync(BACKUPS_DIR)) {
        fs.mkdirSync(BACKUPS_DIR);
    }

    const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
    const backupFileName = `db_${timestamp}.json`;
    const backupPath = path.join(BACKUPS_DIR, backupFileName);

    fs.copyFileSync(DB_PATH, backupPath);
    console.log(`Backup creado: ${backupFileName}`);
}

 import * as fs from 'fs';
import * as path from 'path';

const LOG_PATH = path.join(__dirname, 'log.txt');

export function registrarLog(mensaje: string): void {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${mensaje}\n`;
    fs.appendFileSync(LOG_PATH, logMessage);
}

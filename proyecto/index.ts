import { insertar, listar, eliminar, crearBackUp } from './operaciones';

// Insertar un cliente
insertar('clientes', 'id', { nombre: 'Juan Lopez', saldo: 1000 });

// Listar clientes
console.log('Clientes actuales:');
console.log(listar('clientes'));

// Eliminar un cliente
eliminar('clientes', 'id', 1);

// Listar después de eliminar
console.log('Clientes después de eliminar:');
console.log(listar('clientes'));

// Crear backup
crearBackUp();

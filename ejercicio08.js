import 'colors'

const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
    { nombre: 'Pantalón', precio: 120 },
    { nombre: 'Corbata', precio: 50 },
]


let productosConIva = productos.map((iva) =>{
    iva.precio = iva.precio * 1.12
    return iva
})

console.log('Se agrego Iva a los productos'.red)
console.log(productosConIva)


let precioMayorOIgual = productosConIva.filter((max) =>{
    return max.precio >= 100
})

console.log('Se filtraron los productos con un precio con iva mayor a 100'.red)
console.log(precioMayorOIgual)

productosConIva.sort((a, b) => a.precio - b.precio)

console.log('Se ordenaron los productos por precio de menor a mayor'.red)
console.log(productosConIva)
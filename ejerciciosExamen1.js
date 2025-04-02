const carrito = [
    { nombre: "Lápiz", precio: 1, cantidad: [2,3,4,5], categoria: "A", descuento: 0.20 },
    { nombre: "Goma", precio: 0.5, cantidad: [1,3,7], categoria: "B", descuento: 0.00 },
    { nombre: "Sacapuntas", precio: 2, cantidad: [8], categoria: "A", descuento: 0.10 },
];

/* const res = carrito.reduce((acc, elem) => 
({...acc, [elem.categoria]: (acc[elem.categoria] || 0) + elem.precio * elem.cantidad * (1 - elem.descuento)})
, {}) */

const res = carrito.reduce((acc, elem) => 
    ({...acc, [elem.categoria] : elem.cantidad.reduce((sum, cant) => sum + cant, 0) * elem.precio * (1 - elem.descuento)+ (acc[elem.categoria] || 0)}), {})
console.log(res);

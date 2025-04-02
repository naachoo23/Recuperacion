/*
Ej. 37: Partiendo del array del carrito anterior, calcula el total de precio
de cada categoría: {'A':4, 'B':0.5 } .
*/
const carrito = [
    { nombre: "Lápiz", precio: 1, cantidad: 2, categoria: "A" },
    { nombre: "Goma", precio: 0.5, cantidad: 1, categoria: "B" },
    { nombre: "Sacapuntas", precio: 2, cantidad: 1, categoria: "A" }
   ];

   const res = carrito.reduce((acc, elem) => ({...acc , [elem.categoria]: (acc[elem.categoria] || 0) + elem.precio * elem.cantidad}), {})
   console.log(res);
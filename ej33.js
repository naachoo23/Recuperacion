/* 
Ej. 33: Partiendo del array del carrito , obtén el precio total de los
productos del carrito. El precio total deberá tener en cuenta, por ejemplo, que
el lápiz está comprado con una cantidad de 2 .
*/
const carrito = [
    { nombre: "Lápiz", precio: 1, cantidad: 2, categoria: "A" },
    { nombre: "Goma", precio: 0.5, cantidad: 1, categoria: "B" },
    { nombre: "Sacapuntas", precio: 2, cantidad: 1, categoria: "A" }
    ];

    const res = carrito.reduce((acc, elem) => acc + (elem.precio + elem.cantidad), 0)
  /*   const res = carrito.reduce((acc, elem) => ({
        total : acc + (elem.precio + elem.cantidad)
        
    }), 0) */
    console.log(res);
    
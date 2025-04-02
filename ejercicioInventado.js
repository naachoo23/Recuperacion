const carrito = [
    { nombre: "Lápiz", precio: 1, cantidad: [2,3,4,5], categoria: "A", descuento : 0.20 },
    { nombre: "Goma", precio: 0.5, cantidad: [1,3,7], categoria: "B", descuento : 0.00 },
    { nombre: "Sacapuntas", precio: 2, cantidad: [8], categoria: "A", descuento: 0.10}
    ];

   
    
    const res = carrito.reduce((acc, elem) => 
        acc + elem.cantidad.reduce((acumulado, cant) => acumulado + cant, 0) * elem.precio * (1 - elem.descuento)
    , 0);
    
    console.log(res);
    
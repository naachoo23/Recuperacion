const carrito2 = [
    { sede: "Principal", desc: 0.02, pedidos: [{ e: "Madera", p: 100, c: 7 }, { e: "Acero", p: 300, c: 4 }] },
    { sede: "Jaén", desc: 0.00, pedidos: [{ e: "Madera", p: 100, c: 2 }, { e: "Baldosas", p: 50, c: 10, d: 0.10 }] },
    { sede: "Úbeda", desc: 0.04, pedidos: [{ e: "Acero", p: 300, c: 15 }] }
];
 
/*  const res = carrito2.reduce((acc, elem) => 
elem.pedidos.reduce((suma, pedido) => ({
    ...suma , [pedido.e] : (suma[pedido.e] || 0) + pedido.c * pedido.p * (1 - (pedido.d || 0) * (1 - elem.desc))
}), acc)
)  

/*  const res = carrito2.reduce((acc, elem) => 
({...acc,  ...elem.pedidos.reduce((suma, pedido) => suma + pedido.c * pedido.p * (1 - (pedido.d || 0)), 0)  * (1 - elem.desc)  + 
    (acc[elem.e] || 0)}), []) 
 */

  const res = carrito2.reduce((acc, elem)=> ({
    ...acc, ...elem.pedidos.reduce((suma, pedido) => ({
        ...suma, [pedido.e] : (suma[pedido.e] || 0) + pedido.c * pedido.p * (1 - (pedido.d || 0)) * (1 - elem.desc)
    }),[])
}), [])  
console.log(res);

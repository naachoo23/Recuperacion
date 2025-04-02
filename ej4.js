const e = [{alta:[8,7,2,1], baja:[6,7,1]}, {alta:[0,1,7], baja:[3,5]}]

//const res = e.filter(mayor => mayor.alta.reduce((acc, elem)=> acc + elem) > mayor.baja.reduce((acc, elem) => acc + elem))

const res = e.filter(({alta, baja} ) => alta.reduce((acc, elem)=> acc + elem, 0) > baja.reduce((acc, elem) => acc + elem, 0))

console.log(res);

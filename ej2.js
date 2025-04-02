const e = [{alta:[8,7,2], baja:[6,7,1]}, {alta:[0,1,7], baja:[3,5,1]}]
//conservar oobjetos que la suma de los objetos tenga una alta mayores que las bajas
/* const res = e.filter(mayor => mayor.alta[0] + mayor.alta[1] + mayor.alta[2] >= mayor.baja[0] + mayor.baja[1] +  mayor.baja[2])
 */
/* const res = e.filter(({alta,baja})=> alta[0] + alta[1] + alta[2] >= baja[0] + baja[1] + baja[2]) */

const res = e.filter(({alta:[a0,a1,a2],baja:[b0,b1,b2]}) => a0 + a1 + a2 >= b0 + b1 + b2 )
console.log(res)




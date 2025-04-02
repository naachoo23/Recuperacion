//quitar 10 o menos caracteres
const t = [["hola","que","tal"],["hablan","mucho"],["si","o","no", "talvez"]]
/* const res = t.filter(e => e.reduce((acc, cad)=> acc + cad.length, 0) > 10) */
/* const res = t.filter(([a,b,c]) => a.length + b.length + c.length > 10)
 */

const res = t.filter(e => e.join("").length > 10)
console.log(res);

const letras = 'a, b, a, b, c';
const res = letras.split(', ').reduce((acc, letra) => ({...acc, [letra]: (acc[letra]|| 0) + 1}), {})
console.log(res);

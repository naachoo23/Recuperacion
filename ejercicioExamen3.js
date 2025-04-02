/* Busca las asignaturas que han tenido 3 o mÃ¡s presentados.
 */
const estudiantes = [
  { nombre: 'Carlos', calificaciones: [
      { materia: 'Matematicas', calificacion: 85, semestre: 1 },
      { materia: 'Historia', calificacion: 90, semestre: 2 },
      { materia: 'Ciencias', calificacion: 78, semestre: 3 },
  ] },
  { nombre: 'Ana', calificaciones: [
      { materia: 'Matematicas', calificacion: 92, semestre: 1 },
      { materia: 'Ingles', calificacion: 88, semestre: 1 },
      { materia: 'Arte', calificacion: 95, semestre: 2 },
      { materia: 'Fisica', calificacion: 75, semestre: 3 },
  ] },
  { nombre: 'Luis', calificaciones: [
      { materia: 'Literatura', calificacion: 78, semestre: 1 },
      { materia: 'Historia', calificacion: 80, semestre: 2 },
  ] },
  { nombre: 'Sofia', calificaciones: [
      { materia: 'Matematicas', calificacion: 90, semestre: 1 },
      { materia: 'Historia', calificacion: 85, semestre: 2 },
      { materia: 'Arte', calificacion: 70, semestre: 3 },
      { materia: 'Fisica', calificacion: 80, semestre: 3 },
  ] },
];

//Aplanando
const res = estudiantes.reduce((acc, elem) => [
    ...acc,
    ...elem.calificaciones.map(clas => ({
        nombre: elem.nombre,
        materia: clas.materia,
        calificacion: clas.calificacion,
        semestre: clas.semestre
    }))
], []);



console.log(res);
//Sumamos las matriculas
const sumaMaterias = res.reduce((acc, elem) => ({
    ...acc, [elem.materia]: (acc[elem.materia] || 0) + 1
}), {})
console.log(sumaMaterias);

//siguiente paso
const res3 = Object.entries(sumaMaterias)
const res4 = res3.filter(e => e[1]  >= 3).map(e => e[0])
console.log(res4);



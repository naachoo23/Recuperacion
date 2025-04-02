
const proyectos =
  [ { nombre: 'Juan',  proyectos: [ { nombre: 'A', meses: 12 }, { nombre: 'B', meses: 20 },                           ] },
    { nombre: 'LucÃ­a', proyectos: [ { nombre: 'A', meses: 8 }, { nombre: 'C', meses: 5 }, { nombre: 'D', meses: 10 }, ] },
    { nombre: 'Mari­a', proyectos: [ { nombre: 'B', meses: 6 }, { nombre: 'C', meses: 9 }, { nombre: 'F', meses: 14 }, ] }
  ];
  const res = proyectos.reduce((acc, persona) => [ ...acc,
    ...persona.proyectos.map(proyecto => ({
      tr: persona.nombre,
      nombre: proyecto.nombre,
      meses: proyecto.meses
    }))
  ], []);

/*   const res2 = proyectos.reduce(
    (acc, elem) => elem.proyectos.length >= 3 && elem.proyectos.reduce((suma, proyecto) => suma + proyecto.meses, 0) >= 24
      ? [...acc, elem.nombre]
      : acc,
    []
  ); */

  const parc2 = proyectos.reduce((acc, elem) => {
    acc[elem.nombre] = [
      elem.proyectos.length, 
      elem.proyectos.reduce((sum, proyecto) => sum + proyecto.meses, 0) 
    ];
    return acc;
  }, {});

  const res3 = Object.entries(parc2)
  const res4 = res3.filter(e => e[1][0] >= 3 && e[1][1] >= 24).map(e => e[0])
 
  
  console.log(res);
  console.log(parc2);
  console.log(res3);
  console.log(res4);
  
  

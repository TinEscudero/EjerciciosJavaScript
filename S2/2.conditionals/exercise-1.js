const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let i=0; i< alumns.length;i++){
    alumn=alumns[i];


    let aprobados = 0
  aprobados = alumn.T1 ? aprobados+1 : aprobados;
    aprobados = alumn.T2 ? aprobados +1: aprobados;
    aprobados = alumn.T3 ? aprobados +1 : aprobados;
    alumn.estaaprobado=aprobados>=2? true: false;
}

console.log(alumns);



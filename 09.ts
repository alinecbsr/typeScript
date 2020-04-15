/* Conhecendo o operador "spread" */

let primeiroArray: number[] = [1, 2, 3];
let segundoArray: number[] = [5, 6, 7];

/* Utilizando spread na construção de um novo bjeto */

let juncaoArray: number[] = [0, ...primeiroArray, 4, ...segundoArray];
alert(juncaoArray);

/* Também é possível compor um novo objeto com a junção do "meuObjeto",
com uma nova propriedade "idade" */

let meuObjeto = {
  id: 1,
  nome: "Aline"
};

let novoObjeto = { ...meuObjeto, idade: 29};
alert(JSON.stringify(novoObjeto));

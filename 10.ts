/* Desconstrução em conjunto com funções com parâmetros e valor padrão */

let meuObjeto ={
  id:1,
  nome: "Aline",
  sobrenome: "Rosa",
  idade: 29,
  altura: 1.64
};

/* Utilizando o princípio da menor autoridade ou princípio do acesso mínimo */

function mostrarDecomposicao(objDecomposto: { nome: string, idade: number}) : void {
  let {nome, idade} = objDecomposto;
  alert(nome);
  alert(idade);
}

mostrarDecomposicao(meuObjeto);

/* Acrescentando valor padrão, deixando propriedade como opcional */

let novoObjeto ={
  /* id:1, Na ausência do id ele recebe o valor padrão*/
  nome: "Aline",
  sobrenome: "Rosa",
  idade: 29,
  altura: 1.64
};

function DecomposicaoValorPadrao(objetoDecomposto: {id?: number, nome: string, idade: number}) : void {
  let {id = 10, nome, idade} = objetoDecomposto;
  alert(id);
  alert(nome);
  alert(idade);
}

DecomposicaoValorPadrao(novoObjeto);

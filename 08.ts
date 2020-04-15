/* Desconstrução de objeto */

let meuObjeto = {
  id: 1,
  nome: "Aline",
  idade: 29
};

/* É possível acessar o valor das propiedades de um objeto através do nome */

let {id, nome} = meuObjeto;
alert(id);
alert(nome);

/* Também é possível agrupar as propiedades em um novo sub objeto */
let meuNovoObjeto = {
  novoId: 2,
  novoNome: "Aline Rosa",
  novaIdade: 30 + "anos"
};


let {novoId, ...novoObjeto} = meuNovoObjeto;
alert(novoId);
alert(JSON.stringify(novoObjeto));

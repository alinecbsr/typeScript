/* Desconstrução de vetores */

/* Além de poder acessar elementos do vetor; */

let Numeros: number[] = [1, 2, 3, 4];
alert(Numeros[0]);

/* Também é possível desconstruir e acessar de forma mais elegante */

let meuNumeros: number[] = [1, 2, 3, 4];

let [primeiro, segundo, terceiro, quarto] = meuNumeros;
alert(primeiro);

/* Ainda é possível desconstruir e acessar apenas alguns elementos */

let [maisUmPrimeiro, , maisUmTerceiro,] = meuNumeros;
alert(maisUmPrimeiro);
alert(maisUmTerceiro);

/* Ainda é possível desconstruir e acessar apenas o último elemento */

let [, , , ultimo] = meuNumeros;
alert(ultimo);

/* Também é possível desconstruir e acessar todo restante do vetor
Utilizando ... na frente, eles são desconstruidos para um sub vetor */

let [primeiroDeNovo, ...demaisItens] = meuNumeros;
alert(primeiroDeNovo);
alert(demaisItens);